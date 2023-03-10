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
    </>
  );
}
