"use client";
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section 
                className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24"
                style={{
                    backgroundImage: `url('/images/kci-hero5.png')`,
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
                            Get in Touch
                        </Badge>

                        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                            Let&apos;s Discuss<br />
                            <span className="text-red-600">Your Project</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Whether you need a quick quote, have questions about our services, or want to
                            schedule a crane for your project, we&apos;re here to help. Contact us anytime—we&apos;re
                            available 24/7 for emergency services.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 shadow-lg">
                                <a href="tel:815-675-9400" className="flex items-center">
                                    <PhoneIcon className="mr-2 h-5 w-5" />
                                    Call (815) 675-9400
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                                <a href="mailto:Sales@KnollSteelInc.com">Email Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <PhoneIcon className="text-red-700" />
                                </div>
                                <h3 className="font-semibold mb-2">Phone</h3>
                                <p className="text-muted-foreground text-sm mb-2">24/7 Emergency Service</p>
                                <a href="tel:815-675-9400" className="text-red-700 font-semibold hover:underline">
                                    (815) 675-9400
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <EmailIcon className="text-red-700" />
                                </div>
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-muted-foreground text-sm mb-2">Get a quote</p>
                                <a href="mailto:Sales@KnollSteelInc.com" className="text-red-700 font-semibold hover:underline break-all">
                                    Sales@KnollSteelInc.com
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <LocationOnIcon className="text-red-700" />
                                </div>
                                <h3 className="font-semibold mb-2">Service Area</h3>
                                <p className="text-muted-foreground text-sm">
                                    Wisconsin & Illinois<br />
                                    Based in Kenosha, WI
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <AccessTimeIcon className="text-red-700" />
                                </div>
                                <h3 className="font-semibold mb-2">Hours</h3>
                                <p className="text-muted-foreground text-sm">
                                    24/7 Emergency Service<br />
                                    Office: Mon-Fri 7AM-5PM
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Contact Form and Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Request a Quote</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we&apos;ll get back to you within 24 hours
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input id="firstName" placeholder="John" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input id="lastName" placeholder="Smith" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email *</Label>
                                            <Input id="email" type="email" placeholder="john@company.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone *</Label>
                                            <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company Name</Label>
                                        <Input id="company" placeholder="Your Company" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="project-type">Project Type</Label>
                                            <select id="project-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                <option value="">Select Project Type</option>
                                                <option value="residential">Residential Construction</option>
                                                <option value="commercial">Commercial Construction</option>
                                                <option value="industrial">Industrial Installation</option>
                                                <option value="emergency">Emergency Service</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="timeline">Project Timeline</Label>
                                            <select id="timeline" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                                <option value="">Select Timeline</option>
                                                <option value="asap">ASAP / Emergency</option>
                                                <option value="week">Within a Week</option>
                                                <option value="month">Within a Month</option>
                                                <option value="planning">Planning Stage</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="location">Project Location</Label>
                                        <Input id="location" placeholder="City, State" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="details">Project Details</Label>
                                        <Textarea
                                            id="details"
                                            placeholder="Tell us about your project: What needs to be lifted? Approximate weight? Any special requirements?"
                                            rows={5}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" id="emergency" className="h-4 w-4 rounded border-gray-300" />
                                        <Label htmlFor="emergency" className="text-sm font-normal">
                                            This is an emergency request
                                        </Label>
                                    </div>

                                    <Button size="lg" className="w-full bg-red-700 hover:bg-red-800">
                                        Submit Request
                                        <ArrowForwardIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Additional Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Quick Response Card */}
                            <Card className="bg-red-700 text-white">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                                    <p className="mb-4">
                                        Our 24/7 emergency response team is ready to help with urgent crane needs.
                                    </p>
                                    <Button asChild variant="secondary" size="lg" className="w-full">
                                        <a href="tel:815-675-9400" className="flex items-center justify-center">
                                            <PhoneIcon className="mr-2" />
                                            Call Now: (815) 675-9400
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Why Choose Us */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Why Work With Us?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircleIcon className="text-green-600 mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm">24/7 emergency service availability</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircleIcon className="text-green-600 mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm">Free quotes and project consultations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircleIcon className="text-green-600 mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm">NCCCO certified operators</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircleIcon className="text-green-600 mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm">Comprehensive insurance coverage</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircleIcon className="text-green-600 mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm">25+ years of experience</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircleIcon className="text-green-600 mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span className="text-sm">Perfect safety record</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Service Area */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Service Area</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        We proudly serve all of Wisconsin and Illinois, with rapid response times throughout:
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <p className="font-semibold mb-1">Wisconsin</p>
                                            <ul className="text-muted-foreground space-y-1">
                                                <li>• Milwaukee</li>
                                                <li>• Kenosha</li>
                                                <li>• Racine</li>
                                                <li>• Madison</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1">Illinois</p>
                                            <ul className="text-muted-foreground space-y-1">
                                                <li>• Chicago</li>
                                                <li>• Waukegan</li>
                                                <li>• Rockford</li>
                                                <li>• North Suburbs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                        <p className="text-muted-foreground">
                            Strategically located to serve Wisconsin and Illinois
                        </p>
                    </div>

                    <Card className="h-96 flex items-center justify-center">
                        <div className="text-center">
                            <LocationOnIcon className="text-muted-foreground mb-4" style={{ fontSize: 60 }} />
                            <p className="text-lg font-semibold">Kenosha, Wisconsin</p>
                            <p className="text-muted-foreground">Serving a 150-mile radius</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-red-700 to-red-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Don&apos;t wait—contact us today for a free quote and let&apos;s discuss how we can help with your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary">
                            <a href="tel:815-675-9400">
                                <PhoneIcon className="mr-2" />
                                Call (815) 675-9400
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-700">
                            <a href="mailto:Sales@KnollSteelInc.com">
                                <EmailIcon className="mr-2" />
                                Email Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}