import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        fontSize:{
            'heading-05' : '30px',
            'heading-04' : '36px',
            'heading-03' : '48px',
            'heading-02' : '60px',
            'heading-01' : '72px',

            'body-tiny'   : '10px',
            'body-small'  : '12px',
            'body-base'   : '14px',
            'body-medium' : '16px',
            'body-large'  : '18px',
            'body-xl'     : '20px',
            'body-xxl'    : '24px' 
            

        },
        fontWeight:{
            normal      : 400,
            medium      : 500,
            semibold    : 600,
            bold        : 700,
            extrabold   : 800,
        },
        colors : {
            black : '#000000',
            white : '#FFFFFF',
            gray: {
                '50' :'#F8FAFC',
                '100':'#F1F5F9',
                '200':'#64748B',
                '300':'#CBD5E1',
                '400':'#94A3B8',
                '500':'#64748B',
                '600':'#475569',
                '700':'#334155',
                '800':'#1E293B',
                '900':'#0F172A'
            },
            primary : {
                '50' :'#F4F4FF',
                '100':'#E7E6FF',
                '200':'#D0CCFF',
                '300':'#A19AFF',
                '400':'#7167FF',
                '500':'#4235FF',
                '600':'#1302FF',
                '700':'#0F02CC',
                '800':'#0B0199',
                '900':'#080166'
            },
            success : {
                '50' :'#F0FDF4',
                '100':'#DCFCE7',
                '200':'#BBF7D0',
                '300':'#86EFAC',
                '400':'#4ADE80',
                '500':'#22C55E',
                '600':'#16A34A',
                '700':'#15803D',
                '800':'#166534',
                '900':'#14532D'
            },
            warning:{
                '50' :'#FFFBEB',
                '100':'#FEF3C7',
                '200':'#FDE68A',
                '300':'#FCD34D',
                '400':'#FBBF24',
                '500':'#F59E0B',
                '600':'#D97706',
                '700':'#B45309',
                '800':'#92400E',
                '900':'#78350F'
            },
            error:{
                '50' :'#FEF2F2',
                '100':'#FEE2E2',
                '200':'#FECACA',
                '300':'#FCA5A5',
                '400':'#F87171',
                '500':'#EF4444',
                '600':'#DC2626',
                '700':'#B91C1C',
                '800':'#991B1B',
                '900':'#7F1D1D'
            }
        },
        gap : {
            
        }
    },

    plugins: [forms],
};
