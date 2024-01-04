import { Component } from "react";
import aboutImg from '../../assests/img2.jpg';

export class FAQsPage extends Component {
    render() {
        return (
            <div className="flex justify-between">
                <div className="w-[60%] pl-16 pr-8 pt-6">
                    <h1 className="text-3xl font-bold text-[#00A24A] mb-4">Frequently Asked Questions</h1>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">1. What is Janet Ayurvedics?</h2>
                        <p>Janet Ayurvedics is a beauty and wellness brand that has been perfecting the art of skincare since 1961. Our products are crafted with the timeless wisdom of Ayurveda, celebrating the harmony of herbs and the symphony of beauty.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">2. What makes Janet Ayurvedics unique?</h2>
                        <p>Our uniqueness lies in the fusion of tradition and innovation. We are not just a cosmetic brand; we are custodians of the timeless pursuit of beauty. Each product tells a tale of rejuvenation and self-love, embracing the magic of Ayurveda.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">3. How can I explore more about Janet Ayurvedics?</h2>
                        <p>To learn more about us, visit our About Us page. Immerse yourself in the heart of our legacy, where the echoes of generations past resonate in every jar and bottle.</p>
                    </div>

                    {/* Add more FAQs as needed */}
                </div>

                <div className="w-[28%] pb-10 pt-6 pr-3 rounded-tl-xl">
                    <img className="w-full h-full object-cover" src={aboutImg} alt="About Janet Ayurvedics" />
                </div>
            </div>
        );
    }
}
