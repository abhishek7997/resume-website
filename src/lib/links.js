const EXTERNAL_URL = /^https?:\/\//i

export const isExternalUrl = (href = "") => EXTERNAL_URL.test(href)

export const externalLinkProps = (href) =>
  isExternalUrl(href) ? { target: "_blank", rel: "noopener noreferrer" } : {}
