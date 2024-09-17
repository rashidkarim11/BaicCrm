import { useState } from "react";
import { useTranslate } from "../context/lang-context";

export function OnboardingPage() {
  const { t } = useTranslate();

  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [teamMembers, setTeamMembers] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleFinish = () => {
    // Implement onboarding completion logic here
    console.log("Onboarding completed");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t.onboarding}</h2>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-medium mb-2">{t.step1}</h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.companyName}
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.industry}
                  </label>
                  <select
                    id="industry"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  >
                    <option value="">Select an industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-medium mb-2">{t.step2}</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                    checked={selectedModules.includes("clients")}
                    onChange={() =>
                      setSelectedModules((prev) =>
                        prev.includes("clients")
                          ? prev.filter((m) => m !== "clients")
                          : [...prev, "clients"]
                      )
                    }
                  />
                  <span className="ml-2">{t.clients}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                    checked={selectedModules.includes("deals")}
                    onChange={() =>
                      setSelectedModules((prev) =>
                        prev.includes("deals")
                          ? prev.filter((m) => m !== "deals")
                          : [...prev, "deals"]
                      )
                    }
                  />
                  <span className="ml-2">{t.deals}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                    checked={selectedModules.includes("tasks")}
                    onChange={() =>
                      setSelectedModules((prev) =>
                        prev.includes("tasks")
                          ? prev.filter((m) => m !== "tasks")
                          : [...prev, "tasks"]
                      )
                    }
                  />
                  <span className="ml-2">{t.tasks}</span>
                </label>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-medium mb-2">{t.step3}</h3>
              <div>
                <label
                  htmlFor="team-members"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t.inviteMembers}
                </label>
                <textarea
                  id="team-members"
                  rows={3}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={teamMembers}
                  onChange={(e) => setTeamMembers(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          {step > 1 && (
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2"
              onClick={handlePrevious}
            >
              {t.prev}
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleNext}
            >
              {t.next}
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleFinish}
            >
              {t.finish}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
