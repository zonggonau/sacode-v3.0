import Script from "next/script";
import DefaultTags from "./defaulttags";

const metadata = {
  title: "SaCode Website",
  desc: "Website resmi sacode bla bla bla",
};

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>SaCode</title>
      <Script
        src="plugin/components/jquery/jquery-1.9.0.min.js"
        strategy="worker"
      />
      <Script src="plugin/components/moment/moment.min.js" strategy="worker" />
      <Script
        src="plugin/components/moment/moment-timezone-with-data.min.js"
        strategy="worker"
      />
      <Script src="plugin/czm-chat-support.min.js" strategy="worker" />
      <Script src="assets/wa.js" strategy="worker" />
      <Script src="assets/js/jquery/jquery.min.js" strategy="worker" />
      <Script src="assets/js/bootstrap/popper.min.js" strategy="worker" />
      <Script src="assets/js/bootstrap/bootstrap.min.js" strategy="worker" />
      <Script src="assets/js/plugins/plugins.min.js" strategy="worker" />
      <Script src="assets/js/active.js" strategy="worker" />
    </>
  );
}
