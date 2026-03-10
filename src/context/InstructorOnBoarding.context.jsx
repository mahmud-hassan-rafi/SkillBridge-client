import { createContext, useContext, useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const InstructorOnBoardingContext = createContext();

const onboardingRoutes = [
  "/become-instructor/onboarding/teaching-experience",
  "/become-instructor/onboarding/video-experience",
  "/become-instructor/onboarding/existing-audience",
];

export const InstructorOnBoardingContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [becomeInstructorOnboardingStep, setBecomeInstructorOnboardingStep] =
    useState(1);
  const [
    becomeInstructorOnboardingStepPercentange,
    setBecomeInstructorOnboardingStepPercentange,
  ] = useState(Math.ceil((1 / onboardingRoutes.length) * 100));

  // keep percentage in sync whenever the step changes
  const totalSteps = onboardingRoutes.length;
  React.useEffect(() => {
    setBecomeInstructorOnboardingStepPercentange(
      Math.ceil((becomeInstructorOnboardingStep / totalSteps) * 100),
    );
  }, [becomeInstructorOnboardingStep, totalSteps]);

  // keep step in sync with the current URL in case the user lands directly on a route
  const location = useLocation();
  React.useEffect(() => {
    // normalize the pathname so we match even if there's a trailing slash
    const idx = onboardingRoutes.findIndex((r) =>
      location.pathname.startsWith(r),
    );
    if (idx !== -1) {
      setBecomeInstructorOnboardingStep(idx + 1);
    }
  }, [location.pathname]);

  // onboarding continue button
  const handleClickOnboardingContinue = () => {
    if (loading || becomeInstructorOnboardingStep === totalSteps) return; // prevent double clicks or moving past last step
    setLoading(true);

    const nextStep = becomeInstructorOnboardingStep + 1;
    setBecomeInstructorOnboardingStep(nextStep);
    navigate(onboardingRoutes[nextStep - 1]);

    setLoading(false);
  };

  // onboarding previous button
  const handleClickOnboardingPrevious = () => {
    if (loading || becomeInstructorOnboardingStep === 1) return;
    setLoading(true);

    const prevStep = becomeInstructorOnboardingStep - 1;
    setBecomeInstructorOnboardingStep(prevStep);
    navigate(onboardingRoutes[prevStep - 1]);

    setLoading(false);
  };

  const value = {
    handleClickOnboardingContinue,
    handleClickOnboardingPrevious,
    becomeInstructorOnboardingStep,
    becomeInstructorOnboardingStepPercentange,
    loading,
    setLoading,
  };

  return (
    <InstructorOnBoardingContext.Provider value={value}>
      {children}
    </InstructorOnBoardingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useInstructorOnBoardingContext = () =>
  useContext(InstructorOnBoardingContext);
