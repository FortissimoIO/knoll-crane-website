"use client";
import React from "react";
import ConstructionIcon from '@mui/icons-material/Construction';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import TimerIcon from '@mui/icons-material/Timer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EngineeringIcon from '@mui/icons-material/Engineering';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
    {
        icon: <ConstructionIcon className="h-8 w-8" />,
        title: "Mobile Crane Services",
        description: "Expert operators for commercial and residential hoisting projects.",
        features: ["Lifting trusses & steel beams", "Pre-fabricated wall panels", "HVAC & equipment installation", "Precast flooring & materials"],
        details: "Our mobile crane services are the backbone of construction projects across Wisconsin and Illinois. With our 40-ton capacity crane and experienced operators, we handle everything from residential home construction to large commercial installations."
    },
    {
        icon: <PrecisionManufacturingIcon className="h-8 w-8" />,
        title: "Specialized Lifting",
        description: "Certified, fully insured crane operations for complex projects.",
        features: ["Plywood & micro-lams", "Pre-cast components", "Roofing materials", "Emergency response"],
        details: "When your project requires precision and expertise, our specialized lifting services deliver. We work closely with contractors to plan every lift, ensuring safety and efficiency in challenging situations."
    },
    {
        icon: <TimerIcon className="h-8 w-8" />,
        title: "24/7 Availability",
        description: "Round-the-clock service with quick response times for your urgent needs.",
        features: ["Emergency storm response", "3-hour minimum rental", "Same-day service", "Weekend availability"],
        details: "Construction doesn't stop when the sun goes down, and neither do we. Our 24/7 availability means you can count on us for emergency lifts, storm damage response, or time-sensitive projects."
    },
    {
        icon: <EngineeringIcon className="h-8 w-8" />,
        title: "Equipment Moving",
        description: "Safe and efficient relocation of heavy machinery and equipment.",
        features: ["Industrial machinery", "HVAC systems", "Generators", "Manufacturing equipment"],
        details: "Moving heavy equipment requires expertise and the right crane capacity. Our operators are trained in rigging and load balancing to ensure your valuable equipment is moved safely."
    },
    {
        icon: <BuildIcon className="h-8 w-8" />,
        title: "Steel Erection",
        description: "Professional steel beam and structural component installation.",
        features: ["Structural steel beams", "Metal decking", "Prefab steel structures", "Bridge components"],
        details: "Steel erection is one of our specialties. We work with structural steel contractors to place beams, columns, and other components with precision, keeping your project on schedule."
    },
    {
        icon: <VerifiedIcon className="h-8 w-8" />,
        title: "Certified Rigging",
        description: "Expert rigging services for complex and heavy lifts.",
        features: ["Load calculations", "Custom rigging solutions", "Safety planning", "Equipment inspection"],
        details: "Our certified riggers ensure every lift is planned and executed safely. We provide complete rigging solutions, from initial planning to final placement."
    }
];

export default function Services() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section 
                className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24"
                style={{
                    backgroundImage: `url('/images/kci-hero2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="relative z-10 container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <Badge variant="outline" className="bg-red-700/20 text-red-300 border-red-700/50 mb-6 backdrop-blur-sm px-4 py-2">
                            <BuildIcon className="mr-2 h-4 w-4" />
                            Professional Crane Services
                        </Badge>

                        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                            Comprehensive Crane<br />
                            <span className="text-red-600">Solutions & Services</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            From residential construction to industrial installations, Knoll Crane provides
                            expert lifting solutions with NCCCO certified operators and state-of-the-art equipment.
                            Available 24/7 for all your project needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 shadow-lg">
                                <a href="/contact" className="flex items-center">
                                    Get a Quote
                                    <ArrowForwardIcon className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                                <a href="tel:815-675-9400">Call (815) 675-9400</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
                            Our Services
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            With over 25 years of experience, we provide comprehensive crane services
                            tailored to meet the unique demands of each project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, i) => (
                            <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-red-700">
                                <CardHeader>
                                    <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-red-700 group-hover:bg-red-200 transition-colors">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{service.details}</p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, j) => (
                                            <li key={j} className="flex items-start">
                                                <CheckCircleIcon className="text-red-700 mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Service Process */}
                    <div className="bg-muted/30 rounded-lg p-8 lg:p-12">
                        <h3 className="text-3xl font-bold text-center mb-12">Our Service Process</h3>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "1", title: "Initial Consultation", desc: "Discuss your project requirements and timeline" },
                                { step: "2", title: "Site Assessment", desc: "Evaluate the job site and plan the lift" },
                                { step: "3", title: "Equipment & Crew", desc: "Deploy the right crane and certified operators" },
                                { step: "4", title: "Safe Execution", desc: "Complete the lift safely and efficiently" }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h4 className="font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-red-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contact us today for a free quote and let our experienced team handle your next lifting project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary">
                            <a href="/contact">Request a Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-700">
                            <a href="tel:815-675-9400">Call Now: (815) 675-9400</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 