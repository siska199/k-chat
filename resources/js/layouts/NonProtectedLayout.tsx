import Container from '@/components/ui/Container';
import { PropsWithChildren } from 'react';

export default function NonProtectedLayout({ children }: PropsWithChildren) {
    return (
        <Container className="max-h-screen h-screen overflow-y-auto  max-w-[100vw] overflow-x-hidden" variant={"vcc"}>
            <Container className='' variant={"vcc"} customElement={"main"}>{children}</Container>
        </Container>
    );
}
