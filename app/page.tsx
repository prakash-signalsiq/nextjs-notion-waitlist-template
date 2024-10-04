"use client";

import { useState } from 'react';
import { toast } from 'sonner';

import CTA from '@/components/cta';
import Footer from '@/components/footer';
import Form from '@/components/form';
import Header from '@/components/header';
import Logos from '@/components/logos';
import Particles from '@/components/ui/particles';

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [company, setCompany] = useState<string>("");

  const personalEmailDomains = [
    "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"
  ];

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {

    if (!name || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    // const emailDomain = email.split('@')[1];
    // if (personalEmailDomains.includes(emailDomain)) {
    //   toast.error("Please enter your work email address");
    //   return;
    // }
    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // First, attempt to send the email
        // const mailResponse = await fetch("/api/mail", {
        //   cache: "no-store",
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ firstname: name, email }),
        // });

        // if (!mailResponse.ok) {
        //   if (mailResponse.status === 429) {
        //     reject("Rate limited");
        //   } else {
        //     reject("Email sending failed");
        //   }
        //   return; // Exit the promise early if mail sending fails
        // }

        // If email sending is successful, proceed to insert into Notion
        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, experience, company }),
        });

        if (!notionResponse.ok) {
          if (notionResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Notion insertion failed");
          }
        } else {
          resolve({ name });
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢.";
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢.";
        }
        return "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-left overflow-x-clip pt-6 md:pt-12">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />

        <CTA />

        <Form
          name={name}
          email={email}
          experience={experience}
          company={company}
          handleExperienceChange={handleExperienceChange}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleCompanyChange={handleCompanyChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        <Logos />
      </section>

      <Footer />

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}
