let BASE_URL;
const TIME_OUT = 10000;

if (import.meta.env.PROD) {
  BASE_URL = "http://codercba.com:5173";
  // BASE_URL = "http://codercba.prod:5173";
} else {
  BASE_URL = "http://codercba.dev:5173";
}
export { BASE_URL, TIME_OUT };
