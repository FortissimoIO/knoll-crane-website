"use client";
import React from "react";
import Image from "next/image";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeightIcon from '@mui/icons-material/Height';
import EngineeringIcon from '@mui/icons-material/Engineering';
import VerifiedIcon from '@mui/icons-material/Verified';
import HandymanIcon from '@mui/icons-material/Handyman';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Equipment() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section 
                className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24"
                style={{
                    backgroundImage: `url('/images/kci-hero4.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="relative z-10 container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <Badge variant="outline" className="bg-red-700/20 text-red-300 border-red-700/50 mb-6 backdrop-blur-sm px-4 py-2">
                            <LocalShippingIcon className="mr-2 h-4 w-4" />
                            Our Fleet
                        </Badge>

                        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                            State-of-the-Art<br />
                            <span className="text-red-600">Crane Equipment</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Modern, well-maintained cranes operated by NCCCO certified professionals.
                            Our equipment is regularly inspected and serviced to ensure maximum reliability
                            and safety on every job.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 shadow-lg">
                                <a href="/contact" className="flex items-center">
                                    Request Equipment Info
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

            {/* Main Equipment Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-foreground">
                                40-Ton Mobile Crane
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Our flagship crane offers exceptional lifting capacity and reach for the most demanding projects.
                                Perfect for commercial construction, industrial installations, and large residential projects.
                            </p>

                            <div className="grid grid-cols-2 gap-6 my-8">
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <HeightIcon className="text-red-700 mb-2 h-12 w-12 mx-auto" />
                                        <div className="text-2xl font-bold text-foreground mb-1">40 Tons</div>
                                        <div className="text-sm text-muted-foreground">Max Capacity</div>
                                    </CardContent>
                                </Card>
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <EngineeringIcon className="text-red-700 mb-2 h-12 w-12 mx-auto" />
                                        <div className="text-2xl font-bold text-foreground mb-1">130 Feet</div>
                                        <div className="text-sm text-muted-foreground">Max Boom Length</div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Key Features:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="text-red-700 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                        <span>All-terrain capabilities for challenging job sites</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="text-red-700 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                        <span>Advanced load moment indicator system</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="text-red-700 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                        <span>Multiple boom configurations available</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="text-red-700 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                        <span>Outrigger system for maximum stability</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg">
                            <Image
                                src="/images/kci-hero4.png"
                                alt="Knoll Crane 40-ton mobile crane in operation"
                                width={600}
                                height={500}
                                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                                quality={90}
                            />
                        </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="bg-muted/30 rounded-lg p-8 mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Technical Specifications</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-semibold mb-4 text-red-700">Capacity & Dimensions</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Max Capacity:</span>
                                        <span className="font-medium">40 tons (80,000 lbs)</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Max Boom Length:</span>
                                        <span className="font-medium">130 feet</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Min Boom Length:</span>
                                        <span className="font-medium">35 feet</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Max Tip Height:</span>
                                        <span className="font-medium">145 feet</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Outrigger Spread:</span>
                                        <span className="font-medium">24 feet</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4 text-red-700">Performance</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Swing Speed:</span>
                                        <span className="font-medium">2.5 rpm</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Travel Speed:</span>
                                        <span className="font-medium">40 mph</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Gradeability:</span>
                                        <span className="font-medium">40%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Operating Radius:</span>
                                        <span className="font-medium">5-100 feet</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-muted-foreground">Counterweight:</span>
                                        <span className="font-medium">17,600 lbs</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4 text-red-700">Safety Features</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="text-green-600 mr-2 h-4 w-4" />
                                        <span>Load Moment Indicator</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="text-green-600 mr-2 h-4 w-4" />
                                        <span>Anti-Two Block System</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="text-green-600 mr-2 h-4 w-4" />
                                        <span>Outrigger Alarms</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="text-green-600 mr-2 h-4 w-4" />
                                        <span>Wind Speed Indicator</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="text-green-600 mr-2 h-4 w-4" />
                                        <span>Emergency Stop Systems</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Equipment Maintenance */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <VerifiedIcon className="text-red-700 mb-4 h-12 w-12 mx-auto" />
                                <h4 className="text-xl font-bold mb-2">NCCCO Certified</h4>
                                <p className="text-muted-foreground">All operators fully certified and insured for your peace of mind</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <HandymanIcon className="text-red-700 mb-4 h-12 w-12 mx-auto" />
                                <h4 className="text-xl font-bold mb-2">Regular Maintenance</h4>
                                <p className="text-muted-foreground">Comprehensive inspection and maintenance programs ensure reliability</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <SpeedIcon className="text-red-700 mb-4 h-12 w-12 mx-auto" />
                                <h4 className="text-xl font-bold mb-2">Peak Performance</h4>
                                <p className="text-muted-foreground">Equipment maintained to manufacturer specifications for optimal operation</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Additional Equipment */}
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold mb-4">Supporting Equipment</h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            In addition to our mobile crane, we provide all necessary rigging and support equipment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <BuildIcon />, title: "Rigging Equipment", items: ["Slings & shackles", "Spreader bars", "Load blocks", "Chain hoists"] },
                            { icon: <EngineeringIcon />, title: "Safety Gear", items: ["Hard hats", "Safety harnesses", "Tag lines", "Communication radios"] },
                            { icon: <VerifiedIcon />, title: "Support Equipment", items: ["Outrigger pads", "Cribbing blocks", "Load charts", "Planning software"] },
                            { icon: <LocalShippingIcon />, title: "Transport", items: ["Equipment trailers", "Support vehicles", "Tool storage", "Mobile office"] }
                        ].map((category, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <div className="text-red-700 mb-2">{category.icon}</div>
                                    <CardTitle className="text-lg">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        {category.items.map((item, j) => (
                                            <li key={j}>• {item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-red-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Need Equipment for Your Project?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Our team will help you select the right equipment for your specific needs and provide detailed load charts and planning assistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary">
                            <a href="/contact">Get Equipment Details</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-700">
                            <a href="tel:815-675-9400">Call: (815) 675-9400</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}