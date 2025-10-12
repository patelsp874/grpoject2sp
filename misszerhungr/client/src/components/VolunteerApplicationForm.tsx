import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VolunteerApplicationFormProps {
  onBackToLanding: () => void;
}

const VolunteerApplicationForm: React.FC<VolunteerApplicationFormProps> = ({ onBackToLanding }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    city: 'Tuscaloosa',
    zipCode: '',
    
    // Emergency Contact
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    
    // Volunteer Preferences
    volunteerRoles: [] as string[],
    availability: {
      weekdays: false,
      weekends: false,
      evenings: false,
      flexible: false
    },
    preferredTimeSlots: [] as string[],
    
    // Specific Programs
    xpressDelivery: {
      interested: false,
      hasVehicle: false,
      vehicleType: '',
      licenseNumber: '',
      insuranceInfo: ''
    },
    foodCamp: {
      interested: false,
      availableDates: [] as string[],
      preferredLocation: '',
      specialSkills: ''
    },
    
    // Additional Information
    previousVolunteerExperience: '',
    specialSkills: '',
    dietaryRestrictions: '',
    medicalConditions: '',
    motivation: '',
    
    // Agreements
    backgroundCheckConsent: false,
    photoReleaseConsent: false,
    liabilityWaiverConsent: false,
    dataPrivacyConsent: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const volunteerRoles = [
    { id: 'food-sorting', label: 'Food Sorting & Packaging', description: 'Sort and package donated food items' },
    { id: 'xpress-delivery', label: 'Xpress Food Delivery', description: 'Deliver food from restaurants to families in need' },
    { id: 'food-camp', label: 'Food Camp Service', description: 'Serve at community food camps and events' },
    { id: 'nutrition-education', label: 'Nutrition Education', description: 'Teach cooking and nutrition classes' },
    { id: 'community-outreach', label: 'Community Outreach', description: 'Spread awareness and recruit volunteers' },
    { id: 'fundraising', label: 'Fundraising & Events', description: 'Help organize fundraising events' },
    { id: 'admin-support', label: 'Administrative Support', description: 'Data entry, phone calls, office tasks' },
    { id: 'mobile-pantry', label: 'Mobile Pantry Operations', description: 'Help with mobile food pantry distributions' }
  ];

  const timeSlots = [
    'Early Morning (6:00 AM - 9:00 AM)',
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 3:00 PM)',
    'Late Afternoon (3:00 PM - 6:00 PM)',
    'Evening (6:00 PM - 9:00 PM)',
    'Flexible - Any Time'
  ];

  const foodCampDates = [
    '2024-01-15 - Martin Luther King Jr. Day Food Camp',
    '2024-02-14 - Valentine\'s Day Community Meal',
    '2024-03-17 - St. Patrick\'s Day Food Distribution',
    '2024-04-20 - Spring Community Food Camp',
    '2024-05-25 - Memorial Day Weekend Food Service',
    '2024-06-15 - Summer Solstice Community Meal',
    '2024-07-04 - Independence Day Food Camp',
    '2024-08-15 - Back-to-School Food Distribution',
    '2024-09-21 - Fall Equinox Community Meal',
    '2024-10-31 - Halloween Food Camp',
    '2024-11-23 - Thanksgiving Food Distribution',
    '2024-12-21 - Winter Solstice Community Meal'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parentField: string, childField: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField as keyof typeof prev],
        [childField]: value
      }
    }));
  };

  const handleRoleToggle = (roleId: string) => {
    setFormData(prev => ({
      ...prev,
      volunteerRoles: prev.volunteerRoles.includes(roleId)
        ? prev.volunteerRoles.filter(id => id !== roleId)
        : [...prev.volunteerRoles, roleId]
    }));
  };

  const handleAvailabilityToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: !prev.availability[day as keyof typeof prev.availability]
      }
    }));
  };

  const handleTimeSlotToggle = (slot: string) => {
    setFormData(prev => ({
      ...prev,
      preferredTimeSlots: prev.preferredTimeSlots.includes(slot)
        ? prev.preferredTimeSlots.filter(s => s !== slot)
        : [...prev.preferredTimeSlots, slot]
    }));
  };

  const handleFoodCampDateToggle = (date: string) => {
    setFormData(prev => ({
      ...prev,
      foodCamp: {
        ...prev.foodCamp,
        availableDates: prev.foodCamp.availableDates.includes(date)
          ? prev.foodCamp.availableDates.filter(d => d !== date)
          : [...prev.foodCamp.availableDates, date]
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-2xl w-full text-center shadow-xl"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your interest in volunteering with The Table for All. We'll review your application 
            and contact you within 2-3 business days with next steps.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">What happens next?</h3>
            <ul className="text-blue-800 space-y-2 text-left">
              <li>• We'll review your application and preferences</li>
              <li>• You'll receive a welcome email with orientation details</li>
              <li>• We'll schedule a brief phone interview</li>
              <li>• You'll be invited to a volunteer orientation session</li>
              <li>• You'll receive your volunteer assignment and schedule</li>
            </ul>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToLanding}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Return to Homepage
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Volunteer Application</h1>
              <p className="text-gray-600 mt-2">Join our mission to fight hunger in Tuscaloosa County</p>
            </div>
            <button
              onClick={onBackToLanding}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Step {currentStep} of 5</span>
              <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / 5) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(205) 555-0123"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                  <input
                    type="number"
                    required
                    min="16"
                    max="100"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tuscaloosa"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Main Street"
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Volunteer Roles & Preferences */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Roles & Preferences</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Volunteer Roles *</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {volunteerRoles.map((role) => (
                    <div
                      key={role.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.volunteerRoles.includes(role.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleRoleToggle(role.id)}
                    >
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          checked={formData.volunteerRoles.includes(role.id)}
                          onChange={() => handleRoleToggle(role.id)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{role.label}</h4>
                          <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Availability</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(formData.availability).map(([day, isSelected]) => (
                    <label key={day} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleAvailabilityToggle(day)}
                        className="mr-2"
                      />
                      <span className="text-gray-700 capitalize">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferred Time Slots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <label key={slot} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferredTimeSlots.includes(slot)}
                        onChange={() => handleTimeSlotToggle(slot)}
                        className="mr-3"
                      />
                      <span className="text-gray-700">{slot}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Xpress Delivery Program */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Xpress Food Delivery Program</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🚚 How Xpress Delivery Works</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• You'll receive notifications on your phone about available deliveries</li>
                  <li>• Pick up surplus food from partner restaurants</li>
                  <li>• Deliver directly to families in need</li>
                  <li>• Flexible scheduling - accept deliveries when convenient</li>
                  <li>• Mileage reimbursement available</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.xpressDelivery.interested}
                    onChange={(e) => handleNestedInputChange('xpressDelivery', 'interested', e.target.checked)}
                    className="mr-3"
                  />
                  <label className="text-lg font-medium text-gray-700">I'm interested in the Xpress Delivery Program</label>
                </div>

                {formData.xpressDelivery.interested && (
                  <div className="space-y-4 pl-6 border-l-2 border-green-500">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.xpressDelivery.hasVehicle}
                        onChange={(e) => handleNestedInputChange('xpressDelivery', 'hasVehicle', e.target.checked)}
                        className="mr-3"
                      />
                      <label className="text-gray-700">I have access to a reliable vehicle</label>
                    </div>

                    {formData.xpressDelivery.hasVehicle && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                          <select
                            value={formData.xpressDelivery.vehicleType}
                            onChange={(e) => handleNestedInputChange('xpressDelivery', 'vehicleType', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select vehicle type</option>
                            <option value="car">Car</option>
                            <option value="suv">SUV</option>
                            <option value="truck">Truck</option>
                            <option value="van">Van</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Driver's License Number</label>
                          <input
                            type="text"
                            value={formData.xpressDelivery.licenseNumber}
                            onChange={(e) => handleNestedInputChange('xpressDelivery', 'licenseNumber', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your license number"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Information</label>
                          <textarea
                            value={formData.xpressDelivery.insuranceInfo}
                            onChange={(e) => handleNestedInputChange('xpressDelivery', 'insuranceInfo', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={3}
                            placeholder="Please provide your auto insurance details"
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 4: Food Camp Program */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Food Camp Service Program</h2>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">🍽️ How Food Camps Work</h3>
                <ul className="text-orange-700 space-y-2">
                  <li>• Community events where we serve hot meals to families in need</li>
                  <li>• Held at various locations throughout Tuscaloosa County</li>
                  <li>• Volunteers help with setup, serving, and cleanup</li>
                  <li>• Great opportunity to directly interact with community members</li>
                  <li>• Usually 4-6 hour commitments</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.foodCamp.interested}
                    onChange={(e) => handleNestedInputChange('foodCamp', 'interested', e.target.checked)}
                    className="mr-3"
                  />
                  <label className="text-lg font-medium text-gray-700">I'm interested in Food Camp Service</label>
                </div>

                {formData.foodCamp.interested && (
                  <div className="space-y-4 pl-6 border-l-2 border-orange-500">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">Available Dates for Food Camps</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {foodCampDates.map((date) => (
                          <label key={date} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.foodCamp.availableDates.includes(date)}
                              onChange={() => handleFoodCampDateToggle(date)}
                              className="mr-3"
                            />
                            <span className="text-gray-700 text-sm">{date}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                      <select
                        value={formData.foodCamp.preferredLocation}
                        onChange={(e) => handleNestedInputChange('foodCamp', 'preferredLocation', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select preferred location</option>
                        <option value="downtown">Downtown Tuscaloosa</option>
                        <option value="northport">Northport</option>
                        <option value="cottondale">Cottondale</option>
                        <option value="holt">Holt</option>
                        <option value="brookwood">Brookwood</option>
                        <option value="any">Any location is fine</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Skills for Food Service</label>
                      <textarea
                        value={formData.foodCamp.specialSkills}
                        onChange={(e) => handleNestedInputChange('foodCamp', 'specialSkills', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                        placeholder="e.g., Food safety certification, cooking experience, bilingual, etc."
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 5: Additional Information & Agreements */}
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information & Agreements</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Previous Volunteer Experience</label>
                  <textarea
                    value={formData.previousVolunteerExperience}
                    onChange={(e) => handleInputChange('previousVolunteerExperience', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Tell us about any previous volunteer work or community service experience"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Skills or Qualifications</label>
                  <textarea
                    value={formData.specialSkills}
                    onChange={(e) => handleInputChange('specialSkills', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="e.g., Languages spoken, professional skills, certifications, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer with us?</label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Share your motivation for joining our mission"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions or Allergies</label>
                  <input
                    type="text"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any dietary restrictions we should know about"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions (Optional)</label>
                  <input
                    type="text"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any medical conditions that might affect your volunteer work"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name</label>
                      <input
                        type="text"
                        value={formData.emergencyContactName}
                        onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Emergency contact name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone</label>
                      <input
                        type="tel"
                        value={formData.emergencyContactPhone}
                        onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(205) 555-0123"
                      />
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Agreements</h3>
                  <div className="space-y-4">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.backgroundCheckConsent}
                        onChange={(e) => handleInputChange('backgroundCheckConsent', e.target.checked)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-gray-700">
                        I consent to a background check as required for volunteer positions involving direct contact with vulnerable populations. *
                      </span>
                    </label>

                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.photoReleaseConsent}
                        onChange={(e) => handleInputChange('photoReleaseConsent', e.target.checked)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-gray-700">
                        I consent to having my photo taken and used for promotional materials and social media.
                      </span>
                    </label>

                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.liabilityWaiverConsent}
                        onChange={(e) => handleInputChange('liabilityWaiverConsent', e.target.checked)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-gray-700">
                        I understand and agree to the liability waiver and volunteer agreement terms. *
                      </span>
                    </label>

                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.dataPrivacyConsent}
                        onChange={(e) => handleInputChange('dataPrivacyConsent', e.target.checked)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-gray-700">
                        I consent to the collection and processing of my personal data as described in the privacy policy. *
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-bold py-3 px-8 rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerApplicationForm;

