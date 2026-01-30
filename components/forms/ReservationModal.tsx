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
  partySize: string;
  dateTime: string;
}

interface FormErrors {
  name?: string;
  partySize?: string;
  dateTime?: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    partySize: "",
    dateTime: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.partySize) {
      newErrors.partySize = "Please select party size";
    }

    if (!formData.dateTime) {
      newErrors.dateTime = "Please select a date and time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit reservation"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", partySize: "", dateTime: "" });
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
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
              We look forward to seeing you, {formData.name}.
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

            <Input
              label="Date & Time"
              type="datetime-local"
              value={formData.dateTime}
              onChange={(e) =>
                setFormData({ ...formData, dateTime: e.target.value })
              }
              error={errors.dateTime}
              min={new Date().toISOString().slice(0, 16)}
            />

            {submitError && (
              <p className="text-sm text-error">{submitError}</p>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Confirming..." : "Confirm Reservation"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
