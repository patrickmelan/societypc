"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Suspense } from "react"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formSchema } from "@/lib/schemas"
import { send } from "@/lib/email"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

function ContactForm({ messageParam }: { messageParam: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: messageParam,
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    send(values)
    setTimeout(() => setIsSubmitted(false), 1250)
    form.reset()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000) // Hide after 5 seconds
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header changeColor={true} showContact={false}/>
      <main className="flex-grow bg-gradient-to-br from-purple-700 via-blue-500 to-blue-500">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mt-8">
              {isSubmitted && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="space-y-6">
                  <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                      <CardDescription className="text-white/80">
                        We&apos;re here to help with all your tech needs
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-white mt-1" />
                        <div>
                          <h3 className="font-semibold text-white">Phone</h3>
                          <a href="tel:+16109470943" className="text-white/80">(610) 947-0943</a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-white mt-1" />
                        <div>
                          <h3 className="font-semibold text-white">Email</h3>
                          <a href="mailto:contact@societypc.com" className="text-white/80">contact@societypc.com</a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-white mt-1" />
                        <div>
                          <h3 className="font-semibold text-white">Location</h3>
                          <p className="text-white/80">417 Cattell Street, Suite 1</p>
                          <p className="text-white/80">Easton, PA 18042</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                    <CardDescription className="text-white/80">
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">First Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Your first name" 
                                      {...field} 
                                      className="bg-white/20 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 autofill:bg-white/20 autofill:text-white [&:-webkit-autofill]:bg-white/20 [&:-webkit-autofill]:text-white" 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="space-y-2">
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">Last Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Your last name" 
                                      {...field} 
                                      className="bg-white/20 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 autofill:bg-white/20 autofill:text-white [&:-webkit-autofill]:bg-white/20 [&:-webkit-autofill]:text-white" 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your Email" 
                                    {...field} 
                                    className="bg-white/20 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 autofill:bg-white/20 autofill:text-white [&:-webkit-autofill]:bg-white/20 [&:-webkit-autofill]:text-white" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="space-y-2">
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    id="message"
                                    placeholder="Type in your message here"
                                    className="min-h-[120px] bg-white/20 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 autofill:bg-white/20 autofill:text-white [&:-webkit-autofill]:bg-white/20 [&:-webkit-autofill]:text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function SearchParamsWrapper() {
  const searchParams = useSearchParams()
  const messageParam = searchParams.get('message') || ""
  return <ContactForm messageParam={messageParam} />
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper />
    </Suspense>
  )
}

