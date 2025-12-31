'use client'

import { useState, useRef, useEffect } from 'react'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import 'react-day-picker/dist/style.css'

interface DatePickerProps {
  label: string
  selected?: Date
  onChange: (date: Date | undefined) => void
  placeholder?: string
  required?: boolean
}

export default function PremiumDatePicker({ label, selected, onChange, placeholder = 'Select date', required }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex flex-col gap-2 relative" ref={containerRef}>
      <label className="text-[10px] font-black text-gray-400 tracking-[0.1em] uppercase ml-1">
        {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-full px-5 bg-stone-50 rounded-xl border-2 transition-all flex items-center justify-between shadow-sm outline-none ${
          isOpen ? 'border-brand-forest bg-white ring-4 ring-brand-forest/5' : 'border-transparent'
        }`}
      >
        <span className={`${selected ? 'text-gray-900' : 'text-gray-400'} font-medium`}>
          {selected ? format(selected, 'PPP') : placeholder}
        </span>
        <CalendarIcon size={18} className={isOpen ? 'text-brand-forest' : 'text-gray-400'} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-[calc(100%+8px)] left-0 z-50 bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-6 border border-gray-100 min-w-[320px]"
          >
            <style>{`
              .rdp {
                --rdp-cell-size: 38px;
                --rdp-accent-color: #0F2F24;
                --rdp-background-color: #F5F5F0;
                margin: 0;
              }
              .rdp-months { justify-content: center; }
              .rdp-caption {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 20px;
                padding: 0 10px;
              }
              .rdp-caption_label {
                font-family: var(--font-newsreader);
                font-size: 1.5rem;
                font-weight: 700;
                color: #0F2F24;
                position: relative;
                z-index: 1;
              }
              .rdp-nav {
                display: flex;
                gap: 8px;
                color: #0F2F24;
              }
              .rdp-nav_button {
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9999px;
                color: #0F2F24 !important;
                background: #F3F4F6;
                border: none;
                transition: all 0.2s;
              }
              .rdp-nav_button:hover { 
                background-color: #E5E7EB;
                transform: scale(1.1);
              }
              .rdp-head_cell {
                font-size: 0.75rem;
                font-weight: 800;
                color: #9CA3AF;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                padding-bottom: 12px;
              }
              .rdp-day {
                font-weight: 600;
                border-radius: 14px;
                color: #374151;
                transition: all 0.2s;
              }
              .rdp-day_selected {
                background-color: #0F2F24 !important;
                color: white !important;
                box-shadow: 0 8px 20px -5px rgba(15, 47, 36, 0.4);
              }
              .rdp-day:hover:not(.rdp-day_selected) {
                background-color: #F5F5F1;
                color: #0F2F24;
                transform: scale(1.1);
              }
              .rdp-day_today {
                color: #D4AF37;
                font-weight: 800;
                text-decoration: underline;
                text-underline-offset: 4px;
              }
            `}</style>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                onChange(date)
                setIsOpen(false)
              }}
              showOutsideDays
              fixedWeeks
              components={{
                Chevron: (props) => props.orientation === 'left' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {required && !selected && <input type="hidden" required value="" />}
    </div>
  )
}
