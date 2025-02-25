"use client";
import React, { useState } from "react";
import {
  BiMessageDetail, // General Request
  BiPlayCircle, // Demo Request
  BiRadio, // Media Request
  BiGroup, // Sales/Channel Partner
  BiStar, // Feedback
  BiRefresh, // CAPTCHA refresh
} from "react-icons/bi";
import CountryDropdown from "@/components/CountryDropdown";

const EnhancedContactForm = () => {
  const [selectedType, setSelectedType] = useState("general");
  const [country, setCountry] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Singapore",
    company: "",
    email: "",
    contactNumber: "",
    message: "",
    agreeToTerms: false,
    captcha: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const requestTypes = [
    { id: "general", label: "General Request", icon: BiMessageDetail },
    { id: "demo", label: "Demo Request", icon: BiPlayCircle },
    { id: "media", label: "Media Request", icon: BiRadio },
    { id: "sales", label: "Contact Sales", icon: BiGroup },
    { id: "channel", label: "Channel Partner", icon: BiGroup },
    { id: "feedback", label: "Feedback", icon: BiStar },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({
      loading: true,
      message: "Sending your message...",
      error: false,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: selectedType,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Failed to send message");

      setSubmitStatus({
        loading: false,
        message: data.message,
        error: false,
      });

      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        country: "Singapore",
        company: "",
        email: "",
        contactNumber: "",
        message: "",
        agreeToTerms: false,
        captcha: "",
      });
    } catch (error) {
      setSubmitStatus({
        loading: false,
        message: error.message,
        error: true,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-20 p-8 max-w-6xl mx-auto">
      <div className="md:w-1/3">
        <h1 className="text-4xl font-medium text-[#00205b] mb-8">Contact Us</h1>
        <p className="text-[#00205b] mb-6">
          Let Us Know Which Team You'd Like To Connect With!
        </p>

        <div className="space-y-2">
          {requestTypes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedType(id)}
              className={`w-full font-poppins text-left border text-base font-normal px-4 py-3 rounded-lg flex items-center gap-3 transition-colors
                ${
                  selectedType === id
                    ? "bg-gray-300 text-gray-900"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-300"
                }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="md:w-2/3">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-[#00205b] text-base font-medium mb-6">
            Contact Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-normal text-gray-400 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border-b"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-gray-400 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border-b"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-normal text-gray-400 mb-1">
                Country
              </label>
              <CountryDropdown value={country} onChange={setCountry} />
              {/* <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="Singapore">Singapore</option>
                {/* Add more countries as needed */}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                className="rounded"
              />
              <label className="text-sm text-[#00205b]">
                I agree to the privacy terms & conditions
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CAPTCHA
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  className="w-32 p-2 border rounded-md"
                  required
                />
                <img
                  src="/api/placeholder/120/40"
                  alt="CAPTCHA"
                  className="h-10 rounded"
                />
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-gray-900"
                  onClick={() => console.log("Refresh CAPTCHA")}
                >
                  <BiRefresh size={20} />
                </button>
              </div>
            </div>

            {submitStatus.message && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.error
                    ? "bg-red-50 text-red-700"
                    : "bg-green-50 text-green-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus.loading}
              className={`mt-6 px-6 py-2 bg-black text-white text-base font-light rounded-full transition-colors text-[14px] md:text-[16px] ${
                submitStatus.loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white-100"
              }`}
            >
              {submitStatus.loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;
