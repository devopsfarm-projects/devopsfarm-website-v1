import { NextRequest, NextResponse } from 'next/server';

// Home page dynamic content endpoint
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get('userId');

  try {
    // TODO: Fetch from your backend
    // const response = await fetch(`${process.env.BACKEND_API_URL}/home-content?userId=${userId}`);
    // const data = await response.json();
    
    // Mock data - replace with actual backend call
    const homeData = {
      hero: {
        slides: [
          {
            tagline: "Premium MarTech Agency",
            title: "Built, Market, ",
            titleItalic: "Grow.",
            description: "Transforming local businesses into digital leaders with smart tools, creative design, and automated marketing strategies.",
            ctaPrimary: "Start Your Growth",
            ctaSecondary: "Our Services",
            bgImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          },
        ],
      },
      stats: {
        digitalChallenge: [
          { value: '84%', label: 'Mobile Traffic Growth' },
          { value: '12.5x', label: 'Avg. Conversion Lift' }
        ],
        technical: [
          { value: '0.8s', label: 'Avg. Load Speed' },
          { value: '99.9%', label: 'Uptime Guarantee' }
        ],
        localPulse: [
          { value: '100+', label: 'Local Partnerships' },
          { value: '50+', label: 'Regional Cities Reached' }
        ],
      },
      industries: [
        {
          title: 'Retail & E-commerce',
          desc: 'Transforming brick-and-mortar shops into 24/7 digital storefronts.',
          keywords: ['Shopify Experts', 'Local POS Integration', 'Insta-Shop Setup']
        },
      ],
      testimonials: [],
      // Add more sections as needed
    };

    return NextResponse.json({
      success: true,
      data: homeData,
      userId,
    });
  } catch (error) {
    console.error('Error fetching home content:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch home content',
      },
      { status: 500 }
    );
  }
}
