import StackIcon from '@/components/StackIcon';

const StackSection = () => {
    return (
        <div className="text-base mt-4 tracking-wider font-normal grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8">
            {/* Frontend & UI & Animation */}
            <section>
                <h4 className="text-lg font-semibold mb-2">Frontend & UI & Animation</h4>
                <div className="flex flex-wrap gap-2">
                    <StackIcon logo="react.svg" logoText="React" />
                    <StackIcon logo="next.svg" logoText="Next.js" />
                    <StackIcon logo="tailwind.svg" logoText="Tailwind" />
                    <StackIcon logo="gsap.png" logoText="GSAP" />
                    <StackIcon logo="figma.svg" logoText="Figma" />
                    <StackIcon logo="framer.svg" logoText="Framer Motion" />
                    <StackIcon logo="three.svg" logoText="Three.js" />
                    <StackIcon logo="blender.jpeg" logoText="Blender" />
                    <StackIcon logo="sass.svg" logoText="sass" />
                </div>
            </section>

            {/* Backend & Databases */}
            <section>
                <h4 className="text-lg font-semibold mb-2">Backend & Databases</h4>
                <div className="flex flex-wrap gap-2">
                    <StackIcon logo="bun.svg" logoText="Bun.js" />
                    <StackIcon logo="trpc.svg" logoText="tRPC" />
                    <StackIcon logo="prisma.svg" logoText="Prisma" />
                    <StackIcon logo="mongo.svg" logoText="MongoDB" />
                    <StackIcon logo="neon.svg" logoText="NeonDB" />
                    <StackIcon logo="drizzle.svg" logoText="Drizzle" />
                    <StackIcon logo="insomnia.svg" logoText="insomnia" />
                    <StackIcon logo="postman.svg" logoText="postman" />
                    <StackIcon logo="js.svg" logoText="js" />
                    <StackIcon logo="python.svg" logoText="python" />
                    <StackIcon logo="ts.svg" logoText="Drizzle" />
                </div>
            </section>

            {/* DevOps & Infrastructure */}
            <section>
                <h4 className="text-lg font-semibold mb-2">DevOps & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                    <StackIcon logo="aws.svg" logoText="AWS" />
                    <StackIcon logo="docker.jpeg" logoText="Docker" />
                    <StackIcon logo="cloudflare.svg" logoText="Cloudflare" />
                    <StackIcon logo="raspberry.jpeg" logoText="Raspberry Pi" />
                    <StackIcon logo="playwright.png" logoText="Playwright" />
                </div>
            </section>

            {/* Auth & APIs */}
            <section>
                <h4 className="text-lg font-semibold mb-2">Auth & APIs</h4>
                <div className="flex flex-wrap gap-2">
                    <StackIcon logo="next-auth.jpeg" logoText="NextAuth.js" />
                    <StackIcon logo="resend.jpeg" logoText="Resend" />
                    <StackIcon logo="stripe.jpeg" logoText="Stripe" />
                    <StackIcon logo="mux.svg" logoText="Mux" />
                    <StackIcon logo="clerk.jpeg" logoText="clerk" />
                </div>
            </section>
        </div>
    );
};
export default StackSection;
