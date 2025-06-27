"use client";
import React from "react";
import Image from "next/image";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConstructionIcon from '@mui/icons-material/Construction';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TimerIcon from '@mui/icons-material/Timer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import HeightIcon from '@mui/icons-material/Height';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BusinessIcon from '@mui/icons-material/Business';
import CyclingHero from '../components/CyclingHero';
import { Carousel } from '../components/Carousel';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const projectSlides = [
  {
    title: "Commercial Steel Beam Installation",
    description: "40-ton lift for new office complex in Milwaukee",
    image: "/images/recent-projects/recent-project1.JPEG",
    orientation: "portrait"
  },
  {
    title: "Residential Truss Placement",
    description: "Precision placement of roof trusses for luxury homes",
    image: "/images/recent-projects/recent-project2.JPEG",
    orientation: "portrait"
  },
  {
    title: "Industrial Equipment Installation",
    description: "HVAC system installation at manufacturing facility",
    image: "/images/recent-projects/recent-project3.JPEG",
    orientation: "portrait"
  },
  {
    title: "Emergency Storm Response",
    description: "24/7 emergency crane services for storm damage",
    image: "/images/recent-projects/recent-project4.JPEG",
    orientation: "portrait"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <CyclingHero>
          <div className="min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <Badge variant="outline" className="bg-red-700/20 text-red-300 border-red-700/50 mb-6 backdrop-blur-sm px-4 py-2 text-sm sm:text-base">
                  <VerifiedIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Serving Wisconsin & Illinois Since 1996
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  Professional Crane
                  <br />
                  <span className="text-red-500">Rental Services</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
                  NCCCO certified operators providing punctual, dependable, and safe crane rental services with 40-ton capacity and 150FT boom length.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                    <a href="#contact" className="flex items-center justify-center text-white">
                      Get Free Quote
                      <ArrowForwardIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                    <a href="tel:815-675-9400" className="flex items-center justify-center">
                      <PhoneIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Call (815) 675-9400
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { number: "25+", label: "Years Experience" },
                    { number: "24/7", label: "Emergency Service" },
                    { number: "100%", label: "Safety Record" },
                    { number: "40T", label: "Max Capacity" }
                  ].map((stat, i) => (
                    <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300 p-3 sm:p-4">
                      <CardContent className="pt-3 sm:pt-4">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-500 mb-1 sm:mb-2">{stat.number}</div>
                        <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-semibold">{stat.label}</div>
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
      <section className="py-16 sm:py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4">
              <BuildIcon className="mr-2 h-4 w-4" />
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
              Comprehensive Crane Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert crane services tailored to your specific needs, from residential to large-scale commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <ConstructionIcon className="h-8 w-8" />,
                title: "Mobile Crane Services",
                description: "Expert operators for commercial and residential hoisting projects.",
                features: ["Steel beams & trusses", "Pre-fabricated panels", "HVAC installation", "Emergency response"]
              },
              {
                icon: <PrecisionManufacturingIcon className="h-8 w-8" />,
                title: "Specialized Lifting",
                description: "Certified, fully insured crane operations for complex projects.",
                features: ["Precast components", "Roofing materials", "Industrial equipment", "Material positioning"]
              },
              {
                icon: <TimerIcon className="h-8 w-8" />,
                title: "24/7 Availability",
                description: "Round-the-clock service with quick response times.",
                features: ["Emergency service", "Same-day response", "Weekend availability", "3-hour minimum"]
              }
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-red-700">
                <CardHeader className="pb-4">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-red-700 group-hover:bg-red-200 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircleIcon className="text-red-700 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 bg-white" id="projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4">
              <BusinessIcon className="mr-2 h-4 w-4" />
              Our Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing our expertise across various industries and project types throughout Wisconsin and Illinois.
            </p>
          </div>

          <div className="mb-8 sm:mb-12">
            <Carousel slides={projectSlides} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Commercial Construction",
                description: "Large-scale commercial installations and steel beam placement",
                count: "200+ Projects"
              },
              {
                title: "Residential Projects",
                description: "Home building, renovations, and precision residential lifts",
                count: "500+ Projects"
              },
              {
                title: "Emergency Services",
                description: "24/7 rapid response for storm damage and urgent needs",
                count: "100+ Responses"
              }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-red-700 font-semibold">{item.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 sm:py-20 bg-gray-50" id="equipment">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">
                  <LocalShippingIcon className="mr-2 h-4 w-4" />
                  Our Equipment
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
                  40-Ton Mobile Crane
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our flagship crane offers exceptional lifting capacity and reach for demanding projects. Perfect for commercial construction and large residential projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-4">
                    <HeightIcon className="text-red-700 mb-2 h-10 w-10 sm:h-12 sm:w-12 mx-auto" />
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">40 Tons</div>
                    <div className="text-sm text-muted-foreground">Max Capacity</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-4">
                    <EngineeringIcon className="text-red-700 mb-2 h-10 w-10 sm:h-12 sm:w-12 mx-auto" />
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">130 Feet</div>
                    <div className="text-sm text-muted-foreground">Boom Length</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safety & Certification</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <VerifiedIcon className="text-red-700 flex-shrink-0 h-5 w-5" />
                    <span className="text-gray-700">NCCCO certified operators</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HealthAndSafetyIcon className="text-red-700 flex-shrink-0 h-5 w-5" />
                    <span className="text-gray-700">Comprehensive insurance coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BuildIcon className="text-red-700 flex-shrink-0 h-5 w-5" />
                    <span className="text-gray-700">Regular maintenance & inspections</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/kci-hero4.png"
                alt="Knoll Crane 40-ton mobile crane in operation"
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-white" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="mb-4">
                <VerifiedIcon className="mr-2 h-4 w-4" />
                About Knoll Crane
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Your Trusted Partner Since 1996
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Knoll Crane, Inc. has been the preferred crane rental service for contractors throughout Wisconsin and Illinois for over 25 years. Our commitment to safety, reliability, and customer service has made us the trusted choice for projects of all sizes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <CheckCircleIcon className="text-red-700" />, text: "Locally Owned" },
                  { icon: <CheckCircleIcon className="text-red-700" />, text: "Competitive Pricing" },
                  { icon: <CheckCircleIcon className="text-red-700" />, text: "Expert Operators" },
                  { icon: <CheckCircleIcon className="text-red-700" />, text: "Dependable Service" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    {item.icon}
                    <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-red-700 hover:bg-red-800">
                <a href="#contact" className="flex items-center">
                  Get Started Today
                  <ArrowForwardIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 p-6 sm:p-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-red-700 mb-1">25+</div>
                      <div className="text-xs sm:text-sm text-gray-600 uppercase font-semibold">Years Service</div>
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-red-700 mb-1">24/7</div>
                      <div className="text-xs sm:text-sm text-gray-600 uppercase font-semibold">Availability</div>
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-red-700 mb-1">100%</div>
                      <div className="text-xs sm:text-sm text-gray-600 uppercase font-semibold">Safety Record</div>
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-red-700 mb-1">500+</div>
                      <div className="text-xs sm:text-sm text-gray-600 uppercase font-semibold">Projects</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4">
              <StarIcon className="mr-2 h-4 w-4" />
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "Knoll Crane has been our go-to for years. Professional, skilled operators who are always on time.",
                author: "John Peterson",
                company: "Peterson Construction"
              },
              {
                quote: "Emergency service at 2 AM? No problem for Knoll. They helped us meet our critical deadline.",
                author: "Maria Rodriguez", 
                company: "MR Industrial Solutions"
              },
              {
                quote: "Fair pricing, excellent service, and they always prioritize safety. Simply the best.",
                author: "David Chen",
                company: "Chen & Associates"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} className="text-yellow-500 h-4 w-4" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <Badge variant="outline" className="mb-4">
                <PhoneIcon className="mr-2 h-4 w-4" />
                Get In Touch
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Request a Free Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tell us about your project and we&apos;ll provide a competitive quote within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <LocationOnIcon className="text-red-700 h-5 w-5" />
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
                  <div className="bg-red-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <PhoneIcon className="text-red-700 h-5 w-5" />
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
                  <div className="bg-red-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <EmailIcon className="text-red-700 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">Sales@KnollSteelInc.com</p>
                  </div>
                </div>
              </div>

              <Card className="bg-red-700 text-white border-red-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">24/7 Emergency Service</h3>
                  <p className="mb-4">Need immediate crane service? We&apos;re here to help.</p>
                  <Button asChild variant="secondary">
                    <a href="tel:815-675-9400" className="flex items-center bg-white text-red-700 hover:bg-gray-100">
                      <PhoneIcon className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <select id="project-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <option>Select Project Type</option>
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Industrial Installation</option>
                    <option>Emergency Service</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Project Details *</Label>
                  <Textarea
                    id="details"
                    rows={4}
                    placeholder="Describe your project requirements, timeline, and any special considerations..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  Submit Quote Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today for reliable crane rental services in Wisconsin and Illinois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <a href="tel:815-675-9400" className="flex items-center justify-center bg-white text-red-700 hover:bg-gray-100">
                <PhoneIcon className="mr-2 h-4 w-4" />
                Call (815) 675-9400
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-700">
              <a href="#contact" className="flex items-center justify-center">
                Request Quote Online
                <ArrowForwardIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-red-700 p-2 rounded">
                  <ConstructionIcon className="text-white h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black">KNOLL</span>
                  <span className="text-xs font-bold text-red-700 tracking-widest -mt-1">CRANE, INC.</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Professional crane rental services since 1996.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Mobile Crane</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Specialized Lifting</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Emergency Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>2851 N. Route 12<br />Spring Grove, IL 60081</li>
                <li>(815) 675-9400</li>
                <li>Sales@KnollSteelInc.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Mon-Fri: 7AM - 5PM</li>
                <li>Saturday: 8AM - 2PM</li>
                <li>Sunday: Closed</li>
                <li className="text-red-400 font-semibold">24/7 Emergency</li>
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
