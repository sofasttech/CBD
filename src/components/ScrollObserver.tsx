import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

interface ScrollObserverContextType {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  isHidden: boolean;
}

const ScrollObserverContext = createContext<ScrollObserverContextType>({
  activeId: null,
  setActiveId: () => {},
  isHidden: true,
});

interface ScrollObserverProps {
  children: (isHidden: boolean) => React.ReactNode;
  className?: string;
}

export function ScrollObserver({ children, className }: ScrollObserverProps) {
  const [activeId, setActiveId] = useState<string | null>('service-0');
  const [isHidden, setIsHidden] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollObserverContext.Provider value={{ activeId, setActiveId, isHidden }}>
      <div ref={containerRef} className={className}>
        {children(isHidden)}
      </div>
    </ScrollObserverContext.Provider>
  );
}

interface TriggerGroupProps {
  children: React.ReactNode;
  className?: string;
}

function TriggerGroup({ children, className }: TriggerGroupProps) {
  return <div className={className}>{children}</div>;
}

interface TriggerProps {
  id: string;
  children: (isActive: boolean) => React.ReactNode;
  className?: string;
}

function Trigger({ id, children, className }: TriggerProps) {
  const { activeId, setActiveId } = useContext(ScrollObserverContext);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isActive = activeId === id;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveId(id);
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [id, setActiveId]);

  return (
    <div ref={triggerRef} className={className}>
      {children(isActive)}
    </div>
  );
}

interface ReactorGroupProps {
  children: React.ReactNode;
  className?: string;
}

function ReactorGroup({ children, className }: ReactorGroupProps) {
  return <div className={className}>{children}</div>;
}

interface ReactorProps {
  children: (isActive: boolean) => React.ReactNode;
  className?: string;
  index?: number;
}

function Reactor({ children, className, index }: ReactorProps) {
  const { activeId } = useContext(ScrollObserverContext);
  
  // Extract the index from the activeId (e.g., "service-0" -> 0)
  const activeIndex = activeId ? parseInt(activeId.split('-').pop() || '-1') : -1;
  const isActive = index === activeIndex;

  return (
    <div className={className}>
      {children(isActive)}
    </div>
  );
}

ScrollObserver.TriggerGroup = TriggerGroup;
ScrollObserver.Trigger = Trigger;
ScrollObserver.ReactorGroup = ReactorGroup;
ScrollObserver.Reactor = Reactor;
