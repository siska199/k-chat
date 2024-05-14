import { User } from '@/types';
import { PropsWithChildren, ReactNode } from 'react';

type TAuthenticated =  PropsWithChildren<{ user: User, header?: ReactNode }>

const Authenticated = (props:TAuthenticated )=> {
    const { user, header, children } = props

    return (
        <div className="min-h-screen bg-gray-100">
            <main>{children}</main>
        </div>
    );
}

export default Authenticated


