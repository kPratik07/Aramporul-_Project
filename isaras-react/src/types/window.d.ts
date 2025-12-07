/**
 * Global window type extensions for vendor libraries
 */

interface GSAP {
  fromTo(
    target: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ): gsap.core.Tween;
  to(target: gsap.TweenTarget, vars: gsap.TweenVars): gsap.core.Tween;
  set(target: gsap.TweenTarget, vars: gsap.TweenVars): void;
  registerPlugin(...plugins: gsap.Plugin[]): void;
}

interface ScrollTrigger {
  refresh(): void;
}

interface ScrollTriggerStatic {
  refresh(): void;
}

interface InfiniteMarqueeOptions {
  element: string;
  speed?: number;
  smoothEdges?: boolean;
  direction?: 'left' | 'right' | 'up' | 'down';
  gap?: string;
  pauseOnHover?: boolean;
  on?: {
    beforeInit?: () => void;
    afterInit?: () => void;
    pauseAnimation?: () => void;
    resumeAnimation?: () => void;
  };
}

interface InfiniteMarquee {
  new (options: InfiniteMarqueeOptions): InfiniteMarquee;
}

declare global {
  interface Window {
    gsap?: GSAP;
    ScrollTrigger?: ScrollTriggerStatic;
    InfiniteMarquee?: InfiniteMarquee;
    initRevealElements?: () => void;
    _hHeaderTimeout?: ReturnType<typeof setTimeout>;
  }
}

export {};

