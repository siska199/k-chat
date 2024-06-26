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
                'poppins': ['Poppins'],
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
            light       : 300,
            normal      : 400,
            medium      : 500,
            semibold    : 600,
            bold        : 700,
            extrabold   : 800,
        },
        colors : {
            black : '#000000',
            white : '#FFFFFF',
            "broken-white" : '#F8F8FC',
            disabled : "#e1e8ec",
            gray: {
                '50' :'#F8FAFC',
                '100':'#F1F5F9',
                '200':'#E2E8F0',
                '300':'#CBD5E1',
                '400':'#94A3B8',
                '500':'#64748B',
                '600':'#475569',
                '700':'#334155',
                '800':'#1E293B',
                '900':'#0F172A',
                DEFAULT : '#94A3B8'
            },
            primary : {
                '50' :'#FDF2F8',
                '100':'#FCE8F4',
                '200':'#FBD0E8',
                '300':'#F9A9D5',
                '400':'##F471B5',
                '500':'#EC4699',
                '600':'#DB2979',
                '700':'#BF185D',
                '800':'#9B174C',
                '900':'#811842',
                DEFAULT :'#EC4699' ,
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
                '900':'#14532D',
                DEFAULT : '#22C55E'
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
                '900':'#78350F',
                DEFAULT : '#F59E0B'
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
                '900':'#7F1D1D',
                DEFAULT : '#EF4444'
            }
        },
        spacing : {
            '0'     : '0px',
            'px'    : '1px',
            '0.5'   : '0.125rem',
            '1'     : '0.25rem',
            '2'     : '0.50rem',
            '3'     : '0.75rem',
            '4'     : '1rem',
            '5'     : '1.25rem',
            '6'     : '1.5rem',
            '7'     : '1.75rem',
            '8'     : '2rem',
            '9'     : '2.25rem',
            '10'    : '2.5rem',
            '11'    : '2.75rem',
            '12'    : '3rem',
            '14'    : '3.5rem',
            '16'    : '4rem',
            '20'    : '5rem',
            '24'    : '6rem',
            '28'    : '7rem',
            '32'    : '8rem',
            '36'    : '9rem',
            '40'    : '10rem',
            '48'    : '12rem',
            '52'    : '13rem',
            '56'    : '14rem',
            '60'    : '15rem',
            '64'    : '16rem',
            '72'    : '18rem',
            '80'    : '20rem',
            '96'    : '24rem'
        },
        // borderColor: {
        //     DEFAULT: '#E2E8F0',
        //     input : '#D6D6D6',
        //     primary : '#4235FF'
        // },
        // borderWidth: {
        //     DEFAULT: '1px',
        // },

    },

    plugins: [forms],
};
