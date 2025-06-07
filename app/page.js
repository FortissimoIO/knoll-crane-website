"use client";
import React from "react";
import Image from "next/image";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConstructionIcon from '@mui/icons-material/Construction';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import HandymanIcon from '@mui/icons-material/Handyman';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TimerIcon from '@mui/icons-material/Timer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BusinessIcon from '@mui/icons-material/Business';
import FactoryIcon from '@mui/icons-material/Factory';
import WarningIcon from '@mui/icons-material/Warning';
import HeightIcon from '@mui/icons-material/Height';
import InventoryIcon from '@mui/icons-material/Inventory';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Carousel } from '../components/Carousel';
import CyclingHero from '../components/CyclingHero';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const projectSlides = [
  {
    title: "Commercial Steel Beam Installation",
    description: "40-ton lift for new office complex in Milwaukee",
    image: "https://via.placeholder.com/600x800/cc0000/ffffff?text=Commercial+Project",
    orientation: "portrait"
  },
  {
    title: "Residential Truss Placement",
    description: "Precision placement of roof trusses for luxury homes",
    image: "https://via.placeholder.com/600x800/990000/ffffff?text=Residential+Lifting",
    orientation: "portrait"
  },
  {
    title: "Industrial Equipment Installation",
    description: "HVAC system installation at manufacturing facility",
    image: "https://via.placeholder.com/600x800/660000/ffffff?text=Industrial+Install",
    orientation: "portrait"
  },
  {
    title: "Emergency Storm Response",
    description: "24/7 emergency crane services for storm damage",
    image: "https://via.placeholder.com/600x800/330000/ffffff?text=Emergency+Service",
    orientation: "portrait"
  },
  {
    title: "Precast Panel Installation",
    description: "Efficient installation of precast concrete panels",
    image: "https://via.placeholder.com/600x800/800000/ffffff?text=Precast+Installation",
    orientation: "portrait"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <CyclingHero>
          <div className="min-h-screen flex items-center pb-20">
            <div className="container mx-auto px-6 lg:px-8 py-20">
              <div className="max-w-6xl">
                <div className="mb-8">
                  <Badge variant="outline" className="bg-red-700/20 text-red-300 border-red-700/50 mb-8 backdrop-blur-sm px-4 py-2 text-base">
                    <VerifiedIcon className="mr-3 h-5 w-5" />
                    Serving Wisconsin & Illinois Since 1996
                  </Badge>
                </div>

                <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight animate-in slide-in-from-bottom duration-1000">
                  Professional Crane<br />
                  <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Rental Services</span>
                </h1>

                <p className="text-2xl text-gray-300 mb-12 max-w-4xl animate-in slide-in-from-bottom duration-1000 delay-200 leading-relaxed">
                  NCCCO certified operators providing punctual, dependable, and safe crane rental services.
                  With 40-ton capacity and 130&apos; boom length, we handle projects of any size.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-in slide-in-from-bottom duration-1000 delay-300">
                  <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg">
                    <a href="#contact" className="flex items-center text-white">
                      Get Free Quote
                      <ArrowForwardIcon className="ml-3 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg">
                    <a href="tel:815-675-9400" className="flex items-center">
                      <PhoneIcon className="mr-3 h-5 w-5" />
                      Call (815) 675-9400
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-in slide-in-from-bottom duration-1000 delay-500">
                  {[
                    { number: "25+", label: "Years Experience" },
                    { number: "24/7", label: "Emergency Service" },
                    { number: "100%", label: "Safety Record" },
                    { number: "3HR", label: "Min. Rental" }
                  ].map((stat, i) => (
                    <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300 p-6">
                      <CardContent className="pt-6">
                        <div className="text-4xl lg:text-5xl font-black text-red-500 mb-3">{stat.number}</div>
                        <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CyclingHero>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <BuildIcon className="mr-2 h-4 w-4" />
              Our Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Comprehensive Crane Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From residential construction to large-scale commercial projects, we provide expert crane services
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ConstructionIcon className="h-8 w-8" />,
                title: "Mobile Crane Services",
                description: "Expert operators for commercial and residential hoisting projects.",
                features: ["Lifting trusses & steel beams", "Pre-fabricated wall panels", "HVAC & equipment installation", "Precast flooring & materials"]
              },
              {
                icon: <PrecisionManufacturingIcon className="h-8 w-8" />,
                title: "Specialized Lifting",
                description: "Certified, fully insured crane operations for complex projects.",
                features: ["Plywood & micro-lams", "Pre-cast components", "Roofing materials", "Emergency response"]
              },
              {
                icon: <TimerIcon className="h-8 w-8" />,
                title: "24/7 Availability",
                description: "Round-the-clock service with quick response times for your urgent needs.",
                features: ["Emergency storm response", "3-hour minimum rental", "Same-day service", "Weekend availability"]
              }
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-red-700">
                <CardHeader>
                  <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-red-700 group-hover:bg-red-200 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
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
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-background" id="equipment">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <LocalShippingIcon className="mr-2 h-4 w-4" />
              Our Fleet
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              State-of-the-Art Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern, well-maintained cranes operated by NCCCO certified professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                40-Ton Mobile Crane
              </h3>
              <p className="text-lg text-muted-foreground">
                Our flagship crane offers exceptional lifting capacity and reach for the most demanding projects.
                Perfect for commercial construction, industrial installations, and large residential projects.
              </p>

              <div className="grid grid-cols-2 gap-6">
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

              <Button asChild variant="outline" className="group">
                <a href="#contact" className="flex items-center">
                  Request Equipment Details
                  <ArrowForwardIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <Card className="bg-gradient-to-br from-muted/50 to-muted h-96 flex items-center justify-center">
              <LocalShippingIcon className="h-48 w-48 text-muted-foreground/20" />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <VerifiedIcon className="text-red-700 mb-4" fontSize="large" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">NCCCO Certified</h4>
              <p className="text-gray-600">All operators fully certified and insured</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <HandymanIcon className="text-red-700 mb-4" fontSize="large" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Well Maintained</h4>
              <p className="text-gray-600">Regular inspections and preventive maintenance</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <EngineeringIcon className="text-red-700 mb-4" fontSize="large" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Fleet</h4>
              <p className="text-gray-600">Latest equipment for maximum efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BusinessIcon className="text-red-700" />
              <span className="text-red-700 font-semibold uppercase tracking-wider">Our Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise across various industries and project types
            </p>
          </div>

          <div className="mb-12">
            <Carousel slides={projectSlides} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HomeWorkIcon className="text-red-700" fontSize="large" />,
                title: "Residential Construction",
                desc: "Home building and renovation lifts",
                count: "500+ Projects"
              },
              {
                icon: <BusinessIcon className="text-red-700" fontSize="large" />,
                title: "Commercial Projects",
                desc: "Large-scale commercial installations",
                count: "200+ Projects"
              },
              {
                icon: <FactoryIcon className="text-red-700" fontSize="large" />,
                title: "Industrial Equipment",
                desc: "Heavy machinery positioning",
                count: "150+ Projects"
              },
              {
                icon: <WarningIcon className="text-red-700" fontSize="large" />,
                title: "Emergency Services",
                desc: "24/7 rapid response lifting",
                count: "100+ Responses"
              },
              {
                icon: <HeightIcon className="text-red-700" fontSize="large" />,
                title: "Specialty Lifts",
                desc: "Complex and precision operations",
                count: "75+ Projects"
              },
              {
                icon: <InventoryIcon className="text-red-700" fontSize="large" />,
                title: "Material Handling",
                desc: "Construction material delivery",
                count: "1000+ Deliveries"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-8">
                <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-red-700 font-semibold">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Carousel Section - New Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Half-width Carousel */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Carousel slides={[
                  {
                    title: "Steel Beam Placement",
                    description: "Precision lifting for structural installations",
                    image: "https://via.placeholder.com/600x800/cc0000/ffffff?text=Steel+Beams",
                    orientation: "portrait"
                  },
                  {
                    title: "Rooftop Equipment",
                    description: "HVAC and mechanical system installations",
                    image: "https://via.placeholder.com/600x800/990000/ffffff?text=Rooftop+Install",
                    orientation: "portrait"
                  },
                  {
                    title: "Precast Panels",
                    description: "Efficient placement of precast concrete elements",
                    image: "https://via.placeholder.com/600x800/660000/ffffff?text=Precast+Panels",
                    orientation: "portrait"
                  }
                ]} />
              </div>
            </div>

            {/* Half-width Text Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <EngineeringIcon className="text-red-700" />
                <span className="text-red-700 font-semibold uppercase tracking-wider">Expert Solutions</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Precision Lifting for Every Project
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                From delicate residential installations to massive commercial steel beams, our experienced
                operators handle every lift with precision and care. Our 40-ton mobile crane provides the
                perfect combination of power and maneuverability.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">NCCCO Certified Operators</h4>
                    <p className="text-gray-600">Every operator is fully certified and continuously trained</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Safety First Approach</h4>
                    <p className="text-gray-600">100% safety record with comprehensive insurance coverage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rapid Response Time</h4>
                    <p className="text-gray-600">Same-day service available for urgent project needs</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-700 hover:bg-red-800">
                  <a href="#contact" className="flex items-center">
                    Get a Quote
                    <ArrowForwardIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#projects" className="flex items-center">
                    View All Projects
                    <ArrowForwardIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Carousel Section 2 - Safety & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Half-width Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <VerifiedIcon className="text-red-700" />
                <span className="text-red-700 font-semibold uppercase tracking-wider">Safety Excellence</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Zero Compromise on Safety & Quality
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                At Knoll Crane, safety isn&apos;t just a priority—it&apos;s our foundation. With over 25 years of
                incident-free operations, we&apos;ve built our reputation on meticulous planning, rigorous
                safety protocols, and unwavering attention to detail on every single lift.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Safety Commitment</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">100%</span>
                    </div>
                    <span className="text-gray-700">Safety Record</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">25+</span>
                    </div>
                    <span className="text-gray-700">Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">500+</span>
                    </div>
                    <span className="text-gray-700">Annual Inspections</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold">24/7</span>
                    </div>
                    <span className="text-gray-700">Support Available</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BuildIcon className="text-red-700 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive liability insurance up to $5 million</span>
                </div>
                <div className="flex items-center space-x-3">
                  <VerifiedIcon className="text-red-700 flex-shrink-0" />
                  <span className="text-gray-700">All operators NCCCO certified with ongoing training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HealthAndSafetyIcon className="text-red-700 flex-shrink-0" />
                  <span className="text-gray-700">Daily equipment inspections and maintenance logs</span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-red-700 hover:bg-red-800">
                <a href="#contact" className="flex items-center">
                  Schedule a Safety Consultation
                  <ArrowForwardIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Half-width Carousel */}
            <div className="relative">
              <Carousel slides={[
                {
                  title: "Pre-Lift Safety Inspection",
                  description: "Comprehensive site assessment before every operation",
                  image: "https://via.placeholder.com/600x800/cc0000/ffffff?text=Safety+Inspection",
                  orientation: "portrait"
                },
                {
                  title: "Certified Operator Training",
                  description: "Continuous education for our NCCCO certified team",
                  image: "https://via.placeholder.com/600x800/990000/ffffff?text=Operator+Training",
                  orientation: "portrait"
                },
                {
                  title: "Equipment Maintenance",
                  description: "Regular maintenance ensures reliable performance",
                  image: "https://via.placeholder.com/600x800/660000/ffffff?text=Crane+Maintenance",
                  orientation: "portrait"
                },
                {
                  title: "Emergency Response Ready",
                  description: "24/7 availability for critical situations",
                  image: "https://via.placeholder.com/600x800/330000/ffffff?text=Emergency+Ready",
                  orientation: "portrait"
                }
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <VerifiedIcon className="text-red-700" />
                <span className="text-red-700 font-semibold uppercase tracking-wider">About Knoll Crane</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Your Trusted Lifting Partner Since 1996
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Knoll Crane, Inc. has been the go-to crane rental service for contractors throughout Wisconsin
                and Illinois for over 25 years. Our commitment to safety, reliability, and customer service has
                made us the preferred choice for projects of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With NCCCO certified operators and a modern fleet of well-maintained cranes, we handle everything
                from residential construction to large commercial projects with the same level of professionalism
                and expertise.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Knoll Crane?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="text-red-700" />
                    <span className="text-gray-700">Locally Owned & Operated</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="text-red-700" />
                    <span className="text-gray-700">Competitive Pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="text-red-700" />
                    <span className="text-gray-700">Experienced Operators</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="text-red-700" />
                    <span className="text-gray-700">Dependable Service</span>
                  </div>
                </div>
              </div>

              <a href="#contact" className="bg-red-700 text-white px-8 py-4 rounded-md font-bold hover:bg-red-800 transition-colors inline-flex items-center">
                Get Started Today
                <ArrowForwardIcon className="ml-2" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-8">
                <div className="bg-white rounded-lg p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-black text-red-700 mb-2">40</div>
                      <div className="text-sm text-gray-600 uppercase">Ton Capacity</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-red-700 mb-2">130</div>
                      <div className="text-sm text-gray-600 uppercase">Feet Reach</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-red-700 mb-2">25+</div>
                      <div className="text-sm text-gray-600 uppercase">Years Service</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-red-700 mb-2">24/7</div>
                      <div className="text-sm text-gray-600 uppercase">Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <StarIcon className="text-red-700" />
              <span className="text-red-700 font-semibold uppercase tracking-wider">Client Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Knoll Crane has been our go-to for years. Their operators are skilled, professional,
                and always on time. Can&apos;t recommend them enough!&quot;
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">John Peterson</div>
                <div className="text-sm text-gray-600">Peterson Construction LLC</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Emergency service at 2 AM? No problem for Knoll. They helped us salvage a critical
                project timeline. True professionals.&quot;
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                <div className="text-sm text-gray-600">MR Industrial Solutions</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Fair pricing, excellent service, and they always prioritize safety.
                Knoll Crane is simply the best in the business.&quot;
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">David Chen</div>
                <div className="text-sm text-gray-600">Chen & Associates Builders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <PhoneIcon className="text-red-700" />
                <span className="text-red-700 font-semibold uppercase tracking-wider">Get In Touch</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Request a Free Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tell us about your project and we&apos;ll provide a competitive quote within 24 hours.
                For immediate assistance, call us at (815) 675-9400.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <LocationOnIcon className="text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visit Our Location</h4>
                    <p className="text-gray-600">
                      2851 N. Route 12<br />
                      Spring Grove, IL 60081
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <PhoneIcon className="text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      Main: (815) 675-9400<br />
                      Emergency: Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <EmailIcon className="text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      Sales@KnollSteelInc.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-700 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">24/7 Emergency Service</h3>
                <p className="mb-4">Need immediate crane service? We&apos;re here to help.</p>
                <a href="tel:815-675-9400" className="inline-flex items-center bg-white text-red-700 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
                  <PhoneIcon className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Smith" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <select id="project-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Select Project Type</option>
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Industrial Installation</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Project Location</Label>
                  <Input id="location" placeholder="City, State" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Project Details *</Label>
                  <Textarea
                    id="details"
                    rows={4}
                    placeholder="Please describe your project requirements, timeline, and any special considerations..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  Submit Quote Request
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for reliable crane rental services in Wisconsin and Illinois.
            No job too big or too small!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white text-red-700 hover:bg-gray-100">
              <a href="tel:815-675-9400" className="flex items-center">
                <PhoneIcon className="mr-2 h-4 w-4" />
                Call (815) 675-9400
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-700">
              <a href="#contact" className="flex items-center">
                Request Quote Online
                <ArrowForwardIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-red-700 p-2 rounded">
                  <ConstructionIcon className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black">KNOLL</span>
                  <span className="text-xs font-bold text-red-700 tracking-widest -mt-1">CRANE, INC.</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Professional crane rental services in Wisconsin and Illinois since 1996.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#equipment" className="hover:text-white transition-colors">Equipment</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>2851 N. Route 12</li>
                <li>Spring Grove, IL 60081</li>
                <li>(815) 675-9400</li>
                <li>Sales@KnollSteelInc.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Monday - Friday: 7AM - 5PM</li>
                <li>Saturday: 8AM - 2PM</li>
                <li>Sunday: Closed</li>
                <li className="text-red-400 font-semibold">24/7 Emergency Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Knoll Crane, Inc. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
