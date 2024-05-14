import { User } from '@/types';
import { PropsWithChildren, ReactNode } from 'react';

type TProtectedLayout =  PropsWithChildren<{ user: User, header?: ReactNode }>

const ProtectedLayout = (props:TProtectedLayout )=> {
    const { user, header, children } = props

    return (
        <div className="min-h-screen bg-gray-100">
            <main>{children}</main>
        </div>
    );
}

export default ProtectedLayout


