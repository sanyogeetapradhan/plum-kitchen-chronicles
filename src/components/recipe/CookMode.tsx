
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Volume2, VolumeX, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Instruction } from './InstructionSteps';
import { Ingredient } from './IngredientList';

type CookModeProps = {
  instructions: Instruction[];
  ingredients: Ingredient[];
  title: string;
  onClose: () => void;
};

const CookMode: React.FC<CookModeProps> = ({ instructions, ingredients, title, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeTimers, setActiveTimers] = useState<Record<number, number>>({});
  const [timerIntervals, setTimerIntervals] = useState<Record<number, NodeJS.Timeout>>({});
  
  const goToNextStep = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Text to speech functionality
  const speakInstruction = () => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();
      
      const instruction = instructions[currentStep];
      const text = `Step ${instruction.step}: ${instruction.content}`;
      const utterance = new SpeechSynthesisUtterance(text);
      
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };
  
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  
  // Timer functionality
  const startTimer = (stepId: number, minutes: number) => {
    const seconds = minutes * 60;
    
    setActiveTimers(prev => ({
      ...prev,
      [stepId]: seconds
    }));
    
    if (timerIntervals[stepId]) {
      clearInterval(timerIntervals[stepId]);
    }
    
    const intervalId = setInterval(() => {
      setActiveTimers(prev => {
        const currentSeconds = prev[stepId];
        
        if (currentSeconds <= 1) {
          clearInterval(timerIntervals[stepId]);
          
          // Play a sound when timer completes
          const audio = new Audio('/notification.mp3');
          audio.play().catch(e => console.log("Audio play failed:", e));
          
          // Remove this timer
          const newTimers = { ...prev };
          delete newTimers[stepId];
          return newTimers;
        }
        
        return {
          ...prev,
          [stepId]: currentSeconds - 1
        };
      });
    }, 1000);
    
    setTimerIntervals(prev => ({
      ...prev,
      [stepId]: intervalId
    }));
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Clean up timers and speech on unmount
  useEffect(() => {
    return () => {
      Object.values(timerIntervals).forEach(interval => clearInterval(interval));
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [timerIntervals]);
  
  // Get current instruction
  const currentInstruction = instructions[currentStep];
  
  return (
    <div className="fixed inset-0 bg-plum-900 z-50 overflow-y-auto">
      <div className="container-main py-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="text-plum-200 hover:text-white hover:bg-plum-800"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-plum-700 rounded-full mb-8">
          <div 
            className="h-full bg-plum-300 rounded-full" 
            style={{ width: `${((currentStep + 1) / instructions.length) * 100}%` }}
          ></div>
        </div>
        
        {/* Step content */}
        <div className="flex-grow flex flex-col items-center justify-center mb-8">
          <div className="glass-card p-8 max-w-2xl w-full">
            <span className="inline-block bg-plum-300 text-white px-3 py-1 rounded-full text-sm mb-4">
              Step {currentInstruction.step} of {instructions.length}
            </span>
            
            <p className="text-2xl text-white mb-6">{currentInstruction.content}</p>
            
            {currentInstruction.image && (
              <div className="mb-6">
                <img 
                  src={currentInstruction.image} 
                  alt={`Step ${currentInstruction.step}`} 
                  className="rounded-lg w-full max-h-64 object-cover"
                />
              </div>
            )}
            
            {currentInstruction.tip && (
              <div className="bg-plum-700 p-4 rounded-lg mb-6">
                <p className="text-plum-200 text-sm italic">{currentInstruction.tip}</p>
              </div>
            )}
            
            {/* Timer */}
            {currentInstruction.timer && (
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="text-plum-300" />
                <span className="text-plum-200">
                  {currentInstruction.timer} minute{currentInstruction.timer !== 1 ? 's' : ''}
                </span>
                
                {activeTimers[currentInstruction.id] ? (
                  <div className="ml-auto font-mono text-lg font-medium text-plum-300">
                    {formatTime(activeTimers[currentInstruction.id])}
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="ml-auto border-plum-500 text-plum-300"
                    onClick={() => startTimer(currentInstruction.id, currentInstruction.timer || 0)}
                  >
                    Start Timer
                  </Button>
                )}
              </div>
            )}
            
            {/* Voice controls */}
            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                className="border-plum-500 text-plum-200"
                onClick={isSpeaking ? stopSpeaking : speakInstruction}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="mr-2 h-4 w-4" />
                    Stop Reading
                  </>
                ) : (
                  <>
                    <Volume2 className="mr-2 h-4 w-4" />
                    Read Aloud
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            className="border-plum-500 text-plum-200"
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous Step
          </Button>
          <Button
            className="bg-plum-300 hover:bg-plum-400 text-white"
            onClick={goToNextStep}
            disabled={currentStep === instructions.length - 1}
          >
            Next Step
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookMode;
