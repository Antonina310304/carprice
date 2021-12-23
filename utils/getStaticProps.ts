export default function getStaticProps() {
  const papiHost = process.env.NEXT_PUBLIC_PAPI_HOST;
  const papiToken = process.env.NEXT_PUBLIC_API_TOKEN;
  const evaluateApiHost = process.env.EVALUATE_API_URL;
  return { papiHost, papiToken, evaluateApiHost };
}
