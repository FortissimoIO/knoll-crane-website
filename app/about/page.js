"use client";
import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="relative z-10 container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <Badge variant="outline" className="bg-red-700/20 text-red-300 border-red-700/50 mb-6 backdrop-blur-sm px-4 py-2">
                            <VerifiedIcon className="mr-2 h-4 w-4" />
                            Established 1996
                        </Badge>

                        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                            Building Trust<br />
                            <span className="text-red-600">One Lift at a Time</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            For over 25 years, Knoll Crane has been the trusted partner for construction
                            projects across Wisconsin and Illinois. Our commitment to safety, reliability,
                            and excellence has made us the region&apos;s premier crane service provider.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 shadow-lg">
                                <a href="/contact" className="flex items-center">
                                    Work With Us
                                    <ArrowForwardIcon className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                                <a href="/services">Our Services</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Our Story</h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="mb-6">
                                Founded in 1996, Knoll Crane began as a small family-owned business with a single crane
                                and a commitment to providing reliable lifting services to the local construction community.
                                What started as a vision to fill a gap in the market for dependable, safety-focused crane
                                services has grown into one of the region&apos;s most trusted names in the industry.
                            </p>

                            <p className="mb-6">
                                Over the years, we&apos;ve expanded our fleet, enhanced our capabilities, and built a team of
                                highly skilled, NCCCO certified operators. But what hasn&apos;t changed is our dedication to
                                treating every project—whether a small residential job or a major commercial installation—with
                                the same level of professionalism and care.
                            </p>

                            <p>
                                Today, Knoll Crane serves contractors across Wisconsin and Illinois, providing 24/7 crane
                                services with a perfect safety record. We&apos;re proud of our history, but we&apos;re even more
                                excited about continuing to serve our community for generations to come.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold mb-8 text-center">Our Journey</h3>
                            <div className="space-y-8">
                                {[
                                    { year: "1996", event: "Knoll Crane founded with one 20-ton crane" },
                                    { year: "2001", event: "Expanded fleet to include 40-ton mobile crane" },
                                    { year: "2005", event: "All operators achieve NCCCO certification" },
                                    { year: "2010", event: "Reached 1,000 successful projects milestone" },
                                    { year: "2015", event: "Introduced 24/7 emergency response services" },
                                    { year: "2020", event: "Celebrated 25 years with perfect safety record" },
                                    { year: "Today", event: "Continue serving WI & IL with excellence" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="w-20 text-right">
                                            <span className="text-red-700 font-bold">{item.year}</span>
                                        </div>
                                        <div className="w-4 h-4 bg-red-700 rounded-full flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <p className="text-muted-foreground">{item.event}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            These principles guide every decision we make and every lift we perform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <HealthAndSafetyIcon className="h-8 w-8" />,
                                title: "Safety First",
                                description: "Zero compromise on safety protocols. Every lift is planned and executed with meticulous attention to safety."
                            },
                            {
                                icon: <StarIcon className="h-8 w-8" />,
                                title: "Excellence",
                                description: "We strive for excellence in every aspect of our service, from equipment maintenance to customer communication."
                            },
                            {
                                icon: <HandshakeIcon className="h-8 w-8" />,
                                title: "Integrity",
                                description: "Honest pricing, transparent communication, and standing behind our work—integrity is our foundation."
                            },
                            {
                                icon: <AccessTimeIcon className="h-8 w-8" />,
                                title: "Reliability",
                                description: "When we say we'll be there, we're there. Our clients count on us, and we never let them down."
                            }
                        ].map((value, i) => (
                            <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-700">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Team</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Experienced professionals dedicated to your project&apos;s success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <GroupsIcon className="text-red-700 mb-4 h-16 w-16 mx-auto" />
                                <h3 className="text-2xl font-bold mb-2">15+</h3>
                                <p className="text-muted-foreground">Team Members</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <VerifiedIcon className="text-red-700 mb-4 h-16 w-16 mx-auto" />
                                <h3 className="text-2xl font-bold mb-2">100%</h3>
                                <p className="text-muted-foreground">NCCCO Certified</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <EmojiEventsIcon className="text-red-700 mb-4 h-16 w-16 mx-auto" />
                                <h3 className="text-2xl font-bold mb-2">300+</h3>
                                <p className="text-muted-foreground">Years Combined Experience</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-6">What Sets Our Team Apart</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="text-green-600 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span>All operators NCCCO certified with continuous training</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="text-green-600 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span>Average 15+ years of crane operation experience</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="text-green-600 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span>Specialized training in rigging and load calculations</span>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="text-green-600 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span>Regular safety meetings and protocol updates</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="text-green-600 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span>Drug-free workplace with regular testing</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="text-green-600 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span>Commitment to professional development</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Awards */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                        Certifications & Recognition
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "NCCCO Certified",
                                description: "All operators certified by the National Commission for the Certification of Crane Operators"
                            },
                            {
                                title: "OSHA Compliant",
                                description: "Full compliance with all OSHA regulations and safety standards"
                            },
                            {
                                title: "Fully Insured",
                                description: "Comprehensive liability insurance up to $5 million for your peace of mind"
                            },
                            {
                                title: "BBB Accredited",
                                description: "A+ rating with the Better Business Bureau"
                            },
                            {
                                title: "Safety Excellence",
                                description: "25+ years with zero incidents—a testament to our safety commitment"
                            },
                            {
                                title: "Industry Member",
                                description: "Active member of Specialized Carriers & Rigging Association"
                            }
                        ].map((cert, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                                        <VerifiedIcon className="text-red-700" />
                                    </div>
                                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{cert.description}</p>
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
                        Experience the Knoll Crane Difference
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join the hundreds of contractors who trust us with their most important lifts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary">
                            <a href="/contact">Get in Touch</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-700">
                            <a href="/projects">View Our Work</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}