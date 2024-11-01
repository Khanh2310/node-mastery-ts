'use client'
import React from 'react'
import visa from '@/images/logos/visa.png'
import mastercard from '@/images/logos/mastercard.png'
import stripe from '@/images/logos/stripe.png'
import paypal from '@/images/logos/paypal.png'
import Image from 'next/image'
export default function Payment() {
  return (
    <section className="payment-section">
      <div className="container">
        <div className="payment-wrapper">
          <div className="payment-left">
            <div className="payment-header">
              <div className="payment-header-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <div className="payment-header-title">Order Summary</div>
              <p className="payment-header-description">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="payment-content">
              <div className="payment-body">
                <div className="payment-plan">
                  <div className="payment-plan-type">Pro</div>
                  <div className="payment-plan-info">
                    <div className="payment-plan-info-name">
                      Professional Plan
                    </div>
                    <div className="payment-plan-info-price">$49 per month</div>
                  </div>
                  <a href="#" className="payment-plan-change">
                    Change
                  </a>
                </div>
                <div className="payment-summary">
                  <div className="payment-summary-item">
                    <div className="payment-summary-name">Additional fee</div>
                    <div className="payment-summary-price">$10</div>
                  </div>
                  <div className="payment-summary-item">
                    <div className="payment-summary-name">Discount 20%</div>
                    <div className="payment-summary-price">-$10</div>
                  </div>
                  <div className="payment-summary-divider"></div>
                  <div className="payment-summary-item payment-summary-total">
                    <div className="payment-summary-name">Total</div>
                    <div className="payment-summary-price">-$10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-right">
            <form action="" className="payment-form">
              <h1 className="payment-title">Payment Details</h1>
              <div className="payment-method">
                <input
                  type="radio"
                  name="payment-method"
                  id="method-1"
                  defaultChecked
                />
                <label htmlFor="method-1" className="payment-method-item">
                  <Image src={visa} alt='alt="Visa"' />
                </label>
                <input type="radio" name="payment-method" id="method-2" />
                <label htmlFor="method-2" className="payment-method-item">
                  <Image src={mastercard} alt='alt="MasterCard"' />
                </label>
                <input type="radio" name="payment-method" id="method-3" />
                <label htmlFor="method-3" className="payment-method-item">
                  <Image src={paypal} alt='alt="PayPal"' />
                </label>
                <input type="radio" name="payment-method" id="method-4" />
                <label htmlFor="method-4" className="payment-method-item">
                  <Image src={stripe} alt='alt="Stripe"' />
                </label>
              </div>
              <div className="payment-form-group">
                <input
                  type="email"
                  placeholder=" "
                  className="payment-form-control"
                  id="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="payment-form-label payment-form-label-required"
                >
                  Email Address
                </label>
              </div>
              <div className="payment-form-group">
                <input
                  type="text"
                  placeholder=" "
                  className="payment-form-control"
                  id="card-number"
                  required
                />
                <label
                  htmlFor="card-number"
                  className="payment-form-label payment-form-label-required"
                >
                  Card Number
                </label>
              </div>
              <div className="payment-form-group-flex">
                <div className="payment-form-group">
                  <input
                    type="date"
                    placeholder=" "
                    className="payment-form-control"
                    id="expiry-date"
                    required
                  />
                  <label
                    htmlFor="expiry-date"
                    className="payment-form-label payment-form-label-required"
                  >
                    Expiry Date
                  </label>
                </div>
                <div className="payment-form-group">
                  <input
                    type="text"
                    placeholder=" "
                    className="payment-form-control"
                    id="cvv"
                    required
                  />
                  <label
                    htmlFor="cvv"
                    className="payment-form-label payment-form-label-required"
                  >
                    CVV
                  </label>
                </div>
              </div>
              <button type="submit" className="payment-form-submit-button">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                    />
                  </svg>
                </span>
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
