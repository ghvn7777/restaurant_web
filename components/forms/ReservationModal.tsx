"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  partySize: string;
  date: string;
  time: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  partySize?: string;
  date?: string;
  time?: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    partySize: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.partySize) {
      newErrors.partySize = "Please select party size";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", partySize: "", date: "", time: "" });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cream-900/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-cream-400 hover:text-cream-600 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="font-display text-3xl font-semibold text-cream-800 mb-2">
          Reserve a Table
        </h2>
        <p className="text-cream-500 mb-6">
          Book your dining experience at The Oak and Barrel
        </p>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-cream-800 text-lg mb-2">
              Reservation Confirmed!
            </h3>
            <p className="text-cream-500 text-sm mb-6">
              We&apos;ve sent a confirmation to {formData.email}
            </p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              error={errors.name}
              placeholder="John Doe"
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
              placeholder="john@example.com"
            />

            <Select
              label="Party Size"
              value={formData.partySize}
              onChange={(e) =>
                setFormData({ ...formData, partySize: e.target.value })
              }
              error={errors.partySize}
              options={[
                { value: "", label: "Select party size" },
                { value: "1", label: "1 Guest" },
                { value: "2", label: "2 Guests" },
                { value: "3", label: "3 Guests" },
                { value: "4", label: "4 Guests" },
                { value: "5", label: "5 Guests" },
                { value: "6", label: "6 Guests" },
                { value: "7+", label: "7+ Guests" },
              ]}
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                error={errors.date}
                min={new Date().toISOString().split("T")[0]}
              />

              <Select
                label="Time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                error={errors.time}
                options={[
                  { value: "", label: "Select time" },
                  { value: "11:00", label: "11:00 AM" },
                  { value: "12:00", label: "12:00 PM" },
                  { value: "13:00", label: "1:00 PM" },
                  { value: "14:00", label: "2:00 PM" },
                  { value: "17:00", label: "5:00 PM" },
                  { value: "18:00", label: "6:00 PM" },
                  { value: "19:00", label: "7:00 PM" },
                  { value: "20:00", label: "8:00 PM" },
                  { value: "21:00", label: "9:00 PM" },
                ]}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Confirming..." : "Confirm Reservation"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
