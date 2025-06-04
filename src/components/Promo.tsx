"use client"

import { useEffect, useState } from "react"
import { Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function HomePage() {
    const [showSpecialOffer, setShowSpecialOffer] = useState(false)

    // Show the dialog when the component mounts (page loads)
    useEffect(() => {
        const shouldShowPromo = () => {
            try {
                // Get the last time promo was shown
                const lastShown = localStorage.getItem('promoLastShown')
                const lastShownDate = lastShown ? new Date(lastShown) : null
                const now = new Date()
                
                // Don't show if it was shown in the last 24 hours
                if (lastShownDate && (now.getTime() - lastShownDate.getTime()) < 24 * 60 * 60 * 1000) {
                    return false
                }
                
                // Show with 30% probability (adjust this percentage as needed)
                const randomChance = Math.random()
                const showProbability = 0.3 // 30% chance
                
                return randomChance < showProbability
            } catch (error) {
                // If localStorage is not available, show with reduced probability
                console.error('Error checking promo visibility:', error)
                return Math.random() < 0.2 // 20% chance as fallback
            }
        }

        if (shouldShowPromo()) {
            // Small delay to ensure the dialog appears after page load
            const timer = setTimeout(() => {
                setShowSpecialOffer(true)
                // Record that we showed the promo
                try {
                    localStorage.setItem('promoLastShown', new Date().toISOString())
                } catch (error) {
                    console.error('Error setting promo last shown:', error)
                    // Ignore localStorage errors
                }
            }, 500)

            return () => clearTimeout(timer)
        }
    }, [])

    return (
        <Dialog open={showSpecialOffer} onOpenChange={setShowSpecialOffer}>
            <DialogContent className="sm:max-w-md border-2 border-yellow-500">
            <DialogHeader>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 -mt-6 -mx-6 p-4 rounded-t-lg">
                <DialogTitle className="text-2xl font-bold text-white flex items-center justify-center">
                    <Zap className="mr-2 h-6 w-6 text-yellow-300" />
                    SPECIAL OFFER!
                </DialogTitle>
                </div>
            </DialogHeader>

            <div className="py-4">
                <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16 text-green-600" />
                </div>

                <h3 className="text-xl font-bold text-center mb-2">Purchase Antivirus Software & Get</h3>

                <div className="bg-yellow-100 border-4 border-yellow-500 p-4 mb-4">
                <p className="text-center font-bold text-lg">
                    FREE Computer Diagnostics & Tune-Up
                    <span className="block text-sm font-normal mt-1">(A $79.99 Value!)</span>
                </p>
                </div>

                <DialogDescription className="text-center">
                Protect your computer and get it running like new again with this exclusive offer!
                <span className="block font-medium mt-2">Mention this offer when booking or at payment.</span>
                </DialogDescription>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={() => setShowSpecialOffer(false)} className="sm:w-1/2">
                Maybe Later
                </Button>
                <Button
                className="bg-green-600 hover:bg-green-700 sm:w-1/2"
                onClick={() => (window.location.href = "/contact?message=I'd like to claim the free computer diagnostics and tune-up offer.")}
                >
                Claim Offer Now!
                </Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
