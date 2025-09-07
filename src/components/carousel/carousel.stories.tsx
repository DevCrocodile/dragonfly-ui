import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselContent, CarouselSlide, CarouselNext, CarouselPrev, type CarouselProps } from './carousel';

const meta: Meta<CarouselProps> = {
    title: 'Components/Carousel',
    component: Carousel
};

export default meta;

type Story = StoryObj<CarouselProps>;


export const Default: Story = {
    args: {
        children: (
            <>
                <CarouselPrev />
                <CarouselContent>
                    <CarouselSlide value="1" className='df:bg-blue-500'>Slide 1</CarouselSlide>
                    <CarouselSlide value="2" className='df:bg-green-500'>Slide 2</CarouselSlide>
                    <CarouselSlide value="3" className='df:bg-red-500'>Slide 3</CarouselSlide>
                </CarouselContent>
                <CarouselNext />
            </>
        )
    }
};
