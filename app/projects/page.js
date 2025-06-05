"use client";
import React from "react";
import BusinessIcon from '@mui/icons-material/Business';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FactoryIcon from '@mui/icons-material/Factory';
import WarningIcon from '@mui/icons-material/Warning';
import HeightIcon from '@mui/icons-material/Height';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Carousel } from '../../components/Carousel';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectSlides = [
    {
        title: "Commercial Steel Beam Installation",
        description: "40-ton lift for new office complex in Milwaukee",
        image: "https://via.placeholder.com/800x600/cc0000/ffffff?text=Commercial+Project",
        orientation: "landscape"
    },
    {
        title: "Residential Truss Placement",
        description: "Precision placement of roof trusses for luxury homes",
        image: "https://via.placeholder.com/800x600/990000/ffffff?text=Residential+Lifting",
        orientation: "landscape"
    },
    {
        title: "Industrial Equipment Installation",
        description: "HVAC system installation at manufacturing facility",
        image: "https://via.placeholder.com/800x600/660000/ffffff?text=Industrial+Install",
        orientation: "landscape"
    },
    {
        title: "Emergency Storm Response",
        description: "24/7 emergency crane services for storm damage",
        image: "https://via.placeholder.com/800x600/330000/ffffff?text=Emergency+Service",
        orientation: "landscape"
    },
    {
        title: "Precast Panel Installation",
        description: "Efficient installation of precast concrete panels",
        image: "https://via.placeholder.com/800x600/800000/ffffff?text=Precast+Installation",
        orientation: "landscape"
    }
];

const projectCategories = [
    {
        icon: <HomeWorkIcon className="text-red-700 h-8 w-8" />,
        title: "Residential Construction",
        desc: "Home building and renovation lifts",
        count: "500+ Projects",
        projects: [
            "Custom home roof truss installations",
            "Modular home placements",
            "Pool and spa installations",
            "Residential steel beam placement"
        ]
    },
    {
        icon: <BusinessIcon className="text-red-700 h-8 w-8" />,
        title: "Commercial Projects",
        desc: "Large-scale commercial installations",
        count: "200+ Projects",
        projects: [
            "Multi-story office buildings",
            "Retail center construction",
            "Hotel and hospitality projects",
            "Educational facility builds"
        ]
    },
    {
        icon: <FactoryIcon className="text-red-700 h-8 w-8" />,
        title: "Industrial Equipment",
        desc: "Heavy machinery positioning",
        count: "150+ Projects",
        projects: [
            "Manufacturing equipment installation",
            "Industrial HVAC systems",
            "Production line machinery",
            "Warehouse racking systems"
        ]
    },
    {
        icon: <WarningIcon className="text-red-700 h-8 w-8" />,
        title: "Emergency Services",
        desc: "24/7 rapid response lifting",
        count: "100+ Responses",
        projects: [
            "Storm damage recovery",
            "Equipment failure response",
            "Accident scene assistance",
            "Critical infrastructure repair"
        ]
    },
    {
        icon: <HeightIcon className="text-red-700 h-8 w-8" />,
        title: "Specialty Lifts",
        desc: "Complex and precision operations",
        count: "75+ Projects",
        projects: [
            "Bridge construction components",
            "Wind turbine assembly",
            "Art installation placement",
            "Historic building renovation"
        ]
    },
    {
        icon: <InventoryIcon className="text-red-700 h-8 w-8" />,
        title: "Material Handling",
        desc: "Construction material delivery",
        count: "1000+ Deliveries",
        projects: [
            "Precast concrete placement",
            "Steel delivery and positioning",
            "Roofing material lifts",
            "Building supply distribution"
        ]
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="relative z-10 container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <Badge variant="outline" className="bg-red-700/20 text-red-300 border-red-700/50 mb-6 backdrop-blur-sm px-4 py-2">
                            <BusinessIcon className="mr-2 h-4 w-4" />
                            Our Work
                        </Badge>

                        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                            Projects That Define<br />
                            <span className="text-red-600">Excellence</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            With over 25 years of experience and thousands of successful lifts,
                            we've built a reputation for reliability, safety, and precision across
                            Wisconsin and Illinois.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 shadow-lg">
                                <a href="/contact" className="flex items-center">
                                    Start Your Project
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

            {/* Featured Projects Carousel */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            A showcase of our recent work demonstrating our capabilities across various industries
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-16">
                        <Carousel slides={projectSlides} />
                    </div>

                    {/* Project Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            { number: "2,000+", label: "Total Projects" },
                            { number: "25+", label: "Years Experience" },
                            { number: "100%", label: "Safety Record" },
                            { number: "98%", label: "On-Time Completion" }
                        ].map((stat, i) => (
                            <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="text-3xl lg:text-4xl font-black text-red-600 mb-2">{stat.number}</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Categories */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Project Categories
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We provide crane services across a wide range of industries and project types
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectCategories.map((category, i) => (
                            <Card key={i} className="hover:shadow-xl transition-all duration-300">
                                <CardHeader>
                                    <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                        {category.icon}
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                    <CardDescription>{category.desc}</CardDescription>
                                    <p className="text-red-700 font-bold mt-2">{category.count}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {category.projects.map((project, j) => (
                                            <li key={j} className="flex items-start">
                                                <CheckCircleIcon className="text-green-600 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">{project}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Projects Highlights */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                        Recent Project Highlights
                    </h2>

                    <div className="space-y-12 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Milwaukee Office Complex",
                                type: "Commercial Construction",
                                description: "Placed 45 structural steel beams ranging from 20 to 35 tons for a new 12-story office building in downtown Milwaukee.",
                                challenges: ["Limited street access", "High wind conditions", "Tight timeline"],
                                result: "Completed 2 days ahead of schedule with zero incidents"
                            },
                            {
                                title: "Wind Farm Installation",
                                type: "Specialty Lift",
                                description: "Assisted in the assembly and installation of 15 wind turbines, lifting nacelles and blade components up to 300 feet.",
                                challenges: ["Remote location", "Extreme height requirements", "Weather-dependent schedule"],
                                result: "Successfully installed all turbines within the planned timeframe"
                            },
                            {
                                title: "Emergency Bridge Repair",
                                type: "Emergency Response",
                                description: "Responded to an emergency call for bridge beam replacement after storm damage on I-94.",
                                challenges: ["24/7 operation required", "Traffic management", "Safety-critical timeline"],
                                result: "Bridge reopened 18 hours ahead of state deadline"
                            }
                        ].map((project, i) => (
                            <Card key={i} className="overflow-hidden">
                                <CardHeader className="bg-muted/50">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                                            <Badge variant="outline" className="mt-2">{project.type}</Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <p className="text-muted-foreground mb-4">{project.description}</p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-2">Challenges:</h4>
                                            <ul className="space-y-1">
                                                {project.challenges.map((challenge, j) => (
                                                    <li key={j} className="text-sm text-muted-foreground">• {challenge}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Result:</h4>
                                            <p className="text-sm text-green-700 font-medium">{project.result}</p>
                                        </div>
                                    </div>
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
                        Ready to Add Your Project to Our Success Stories?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied clients who trust Knoll Crane for their lifting needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary">
                            <a href="/contact">Get Started Today</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-700">
                            <a href="/services">View Our Services</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}