import Title from "antd/es/typography/Title";

export default function Programs() {
  return (
    <div>
      <Title level={2} style={{ textAlign: "center" }}>
        <strong>Our Programs</strong>
      </Title>
      <div className="section-content programs-container">
        <div style={{ flex: 1, margin: "16px" }}>
          <Title level={3}>
            <strong>Infant Program (7 Months to 18 Months)</strong>
          </Title>

          <p style={{ marginBottom: "16px" }}>
            Our infant program is designed to create a nurturing and safe
            environment where babies can explore, grow, and develop at their own
            pace. We provide:
          </p>
          <ul>
            <li>
              <strong>Sensory Exploration:</strong> Engaging activities to
              stimulate touch, sight, sound, and smell.
            </li>
            <li>
              <strong>Motor Skill Development:</strong> Soft play areas to
              encourage crawling, sitting, and early walking.
            </li>
            <li>
              <strong>Language Exposure:</strong> Daily reading, singing, and
              communication to foster language development.
            </li>
            <li>
              <strong>Individualized Care:</strong> Each infant follows their
              own feeding, nap, and play schedule.
            </li>
            <li>
              <strong>Cognitive Stimulation:</strong> Toys and activities that
              promote problem-solving and early cognitive development.
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, margin: 16 }}>
          <Title level={3}>
            <strong>Toddler Programs (19 Months to 6 Years)</strong>
          </Title>
          <p style={{ marginBottom: "16px" }}>
            Our toddler program focuses on supporting growing independence and
            social skills. We encourage:
          </p>
          <ul>
            <li>
              <strong>Creative Play:</strong> Arts and crafts, pretend play, and
              music to spark creativity.
            </li>
            <li>
              <strong>Language and Communication:</strong> Storytime, songs, and
              early phonics to enhance vocabulary.
            </li>
            <li>
              <strong>Physical Development:</strong> Outdoor play and activities
              designed to improve coordination, balance, and motor skills.
            </li>
            <li>
              <strong>Social Skills:</strong> Group activities to encourage
              sharing, cooperation, and positive peer interaction.
            </li>
            <li>
              <strong>Early Learning:</strong> Introduction to basic concepts
              like shapes, colors, and numbers through interactive play.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
