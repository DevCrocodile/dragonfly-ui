import { cn } from "@utils/classes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { createContext, useContext, useEffect, useState, Children } from "react";

interface CarouselContextProps {
    nextSlide: () => void;
    prevSlide: () => void;
    currentSlide: number;
    setCurrentSlide: (slide: number) => void;
    totalSlides: number;
    setTotalSlides: (total: number) => void;
    width: string;
    height: string;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);

const useCarousel = () => {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error('useCarousel must be used within a CarouselProvider');
    }
    return context;
}

export interface CarouselProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
}

export function Carousel({ children, width, height }: CarouselProps) {
    const [totalSlides, setTotalSlides] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide() {
        if (totalSlides === 0) return;
        setCurrentSlide((prev) => prev === totalSlides - 1 ? 0 : prev + 1);
    }

    function prevSlide() {
        if (totalSlides === 0) return;
        setCurrentSlide((prev) => prev === 0 ? totalSlides - 1 : prev - 1);
    }

    return (
        <CarouselContext.Provider value={{
            nextSlide: nextSlide,
            prevSlide: prevSlide,
            currentSlide: currentSlide,
            totalSlides: totalSlides,
            setTotalSlides: setTotalSlides,
            setCurrentSlide: setCurrentSlide,
            width: width ?? "12rem",
            height: height ?? "12rem"
        }}>
            <div className="df:flex df:flex-col df:gap-4 df:items-center">
                <div className="df:flex df:items-center df:gap-2">
                    {children}
                </div>
                <div className="df:flex df:gap-1">
                    {totalSlides > 0 && Array.from({ length: totalSlides }).map((_, index) => (
                        <CarouselIndicator key={index} active={index === currentSlide} />
                    ))}
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

interface CarouselSlideProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export function CarouselSlide({ value, children, className }: CarouselSlideProps) {
    const { currentSlide, width, height } = useCarousel();
    return (
        <div id={`slide-${value}`} className={cn("df:shrink-0 df:transition-transform df:duration-300", className)} style={{ transform: `translateX(-${(currentSlide * 100).toString()}%)`, width, height }}>
            {children}
        </div>
    )
}

export function CarouselNext() {
    const { nextSlide } = useCarousel();
    return (
        <button onClick={nextSlide} className="df:flex df:items-center df:justify-center df:bg-gray-200 df:opacity-50 hover:df:opacity-100 df:cursor-pointer df:rounded-full df:p-0.5">
            <ChevronRight />
        </button>
    )
}

export function CarouselPrev() {
    const { prevSlide } = useCarousel();
    return (
        <button onClick={prevSlide} className="df:flex df:items-center df:justify-center df:bg-gray-200 df:opacity-50 hover:df:opacity-100 df:cursor-pointer df:rounded-full df:p-0.5">
            <ChevronLeft />
        </button>
    )
}

interface CarouselIndicatorProps {
    className?: string;
    active?: boolean;
}

function CarouselIndicator({ className, active }: CarouselIndicatorProps) {
    return (
        <div className={cn('df:rounded-full df:w-2 df:h-2 df:transition-colors df:duration-200', active ? 'df:bg-blue-500' : 'df:bg-gray-300', className)} />
    )
}

interface CarouselContentProps {
    children: React.ReactNode;
}

export function CarouselContent({ children }: CarouselContentProps) {
    const { setTotalSlides, width, height } = useCarousel();

    useEffect(() => {
        setTotalSlides(Children.count(children));
    }, [children]);

    return (
        <div className="df:flex df:overflow-hidden" style={{ width, height }}>
            <div className="df:flex">
                {children}
            </div>
        </div>
    )
}