"use client"

export function GoogleMapEmbed() {
    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/20 dark:border-black/20 shadow-lg">

            {/* Glass Overlay (top gradient for premium feel) */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-white/10 via-transparent to-white/5 dark:from-black/20 dark:via-transparent dark:to-black/10" />

            {/* Map */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5013417370787!2d77.3130733!3d28.584733099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56408add5c9%3A0x81694818142d8dd3!2sDigitech%20Healthcare%20-%20Best%20Healthcare%20Digital%20Marketing%20Agency%20in%20Noida-Delhi%20NCR%20%7C%20SEO%20%7C%20PPC%20%7C%20SMM%20%7C%20Web%20Development!5e0!3m2!1sen!2sin!4v1774522849185!5m2!1sen!2sin"
                className="h-[400px] w-full sm:h-[450px] md:h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Optional Glow Effect */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
        </div>
    )
}