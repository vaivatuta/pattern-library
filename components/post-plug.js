import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPlug({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage slug={slug} title={title} image={coverImage} />
        )}
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/components/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <div className="mb-4 text-lg leading-relaxed flex flex-col gap-2">
        {excerpt ? (
          excerpt
        ) : (
          <>
            There is no description. Have a poem instead.
            <p className="text-my-blue text-sm">
              When I heard the learn’d astronomer,
              <br />
              When the proofs, the figures, were ranged in columns before me,
              <br /> When I was shown the charts and diagrams, to add, divide,
              and measure them,
              <br /> When I sitting heard the astronomer where he lectured with
              much applause in the lecture-room,
              <br /> How soon unaccountable I became tired and sick,
              <br /> Till rising and gliding out I wander’d off by myself,
              <br /> In the mystical moist night-air, and from time to time,
              <br />
              Look’d up in perfect silence at the stars.
            </p>
          </>
        )}
      </div>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
