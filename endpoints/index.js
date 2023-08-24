export async function getTrustedCompanies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/trusted-company`
  )
  return await response.json()
}

export async function getOurServices() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/our-services`
  )
  return await response.json()
}

export async function getManagement() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/management`
  )
  return await response.json()
}

export async function getCaseStudies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/case-study`
  )
  return await response.json()
}

export async function getOurTeam() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/our-team`
  )
  return await response.json()
}

export async function getOurPlan() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/our-plan`
  )
  return await response.json()
}

export async function getTestimonials() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/testimonial`
  )
  return await response.json()
}

export async function getAboutUs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/about-us`
  )
  return await response.json()
}

export async function getBenefits() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/benefit`
  )
  return await response.json()
}
export async function getPosition() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/job-opening`
  )
  return await response.json()
}