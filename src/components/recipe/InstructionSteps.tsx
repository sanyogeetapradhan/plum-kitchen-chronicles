
import React, { useState } from 'react';
import { ChefHat, Clock, Play, Pause, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

export type Instruction = {
  id: number;
  step: number;
  content: string;
  tip?: string;
  timer?: number; // in minutes
  image?: string;
};

type InstructionStepsProps = {
  instructions: Instruction[];
};

const InstructionSteps: React.FC<InstructionStepsProps> = ({ instructions }) => {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const [activeTimers, setActiveTimers] = useState<Record<number, number>>({});
  const [timerIntervals, setTimerIntervals] = useState<Record<number, NodeJS.Timeout>>({});
  const { toast } = useToast();

  const toggleExpandStep = (stepId: number) => {
    setExpandedSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const startTimer = (stepId: number, minutes: number) => {
    // Convert minutes to seconds
    const seconds = minutes * 60;
    
    // Set the initial timer value
    setActiveTimers(prev => ({
      ...prev,
      [stepId]: seconds
    }));

    // Clear any existing interval for this step
    if (timerIntervals[stepId]) {
      clearInterval(timerIntervals[stepId]);
    }

    // Create a new interval
    const intervalId = setInterval(() => {
      setActiveTimers(prev => {
        const currentSeconds = prev[stepId];
        
        if (currentSeconds <= 1) {
          // Timer completed
          clearInterval(timerIntervals[stepId]);
          
          toast({
            title: "Timer Complete!",
            description: `Step ${instructions.find(i => i.id === stepId)?.step} timer is finished.`,
            duration: 5000,
          });
          
          // Remove this timer
          const newTimers = { ...prev };
          delete newTimers[stepId];
          return newTimers;
        }
        
        // Decrement the timer
        return {
          ...prev,
          [stepId]: currentSeconds - 1
        };
      });
    }, 1000);

    // Store the interval ID
    setTimerIntervals(prev => ({
      ...prev,
      [stepId]: intervalId
    }));
  };

  const stopTimer = (stepId: number) => {
    if (timerIntervals[stepId]) {
      clearInterval(timerIntervals[stepId]);
      
      // Remove the interval and active timer
      const newIntervals = { ...timerIntervals };
      delete newIntervals[stepId];
      setTimerIntervals(newIntervals);
      
      const newTimers = { ...activeTimers };
      delete newTimers[stepId];
      setActiveTimers(newTimers);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-plum-800 rounded-xl p-6 glass-card card-hover">
      <h3 className="font-montserrat font-medium text-xl text-white mb-4">Instructions</h3>
      <Separator className="bg-plum-600 mb-6" />
      
      <ol className="space-y-8">
        {instructions.map((instruction) => (
          <li key={instruction.id} className="relative">
            <div className="flex items-start gap-4">
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-plum-600 text-white flex items-center justify-center font-medium">
                {instruction.step}
              </div>
              
              {/* Step Content */}
              <div className="flex-grow">
                <p className="text-plum-100">{instruction.content}</p>
                
                {/* Expandable Content */}
                {(instruction.tip || instruction.image) && (
                  <Button
                    variant="link"
                    className="p-0 h-auto text-plum-300 hover:text-plum-200 mt-2"
                    onClick={() => toggleExpandStep(instruction.id)}
                  >
                    {expandedSteps.includes(instruction.id) ? "Hide details" : "Show details"}
                    <ArrowRight className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                      expandedSteps.includes(instruction.id) ? "rotate-90" : ""
                    }`} />
                  </Button>
                )}
                
                {expandedSteps.includes(instruction.id) && (
                  <div className="mt-3 pl-2 border-l-2 border-plum-600 animate-fade-in">
                    {instruction.tip && (
                      <div className="flex items-start gap-2 mb-3">
                        <AlertCircle className="h-4 w-4 text-plum-300 mt-0.5 flex-shrink-0" />
                        <p className="text-plum-200 text-sm italic">{instruction.tip}</p>
                      </div>
                    )}
                    
                    {instruction.image && (
                      <div className="mt-3">
                        <img 
                          src={instruction.image} 
                          alt={`Step ${instruction.step}`} 
                          className="rounded-lg max-h-48 object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
                
                {/* Timer */}
                {instruction.timer && (
                  <div className="mt-3 flex items-center">
                    <Clock className="h-4 w-4 text-plum-300 mr-2" />
                    <span className="text-plum-200 text-sm mr-3">
                      {instruction.timer} {instruction.timer === 1 ? 'minute' : 'minutes'}
                    </span>
                    
                    {activeTimers[instruction.id] ? (
                      <>
                        <span className="font-mono text-plum-300 mr-2">
                          {formatTime(activeTimers[instruction.id])}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 border-plum-500 text-plum-300"
                          onClick={() => stopTimer(instruction.id)}
                        >
                          <Pause className="h-3 w-3 mr-1" />
                          Stop
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 border-plum-500 text-plum-300"
                        onClick={() => startTimer(instruction.id, instruction.timer)}
                      >
                        <Play className="h-3 w-3 mr-1" />
                        Start Timer
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionSteps;
