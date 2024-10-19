import Title from "antd/es/typography/Title";

export default function Activities() {
  return (
    <div>
      <Title level={2} style={{ textAlign: "center", padding: 16 }}>
        <strong>Our Activities</strong>
      </Title>

      <ul style={{ listStyleType: "none", paddingLeft: 32 }}>
        {/* Creative Arts Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Creative Arts</strong>
          </h2>
          <p>
            We encourage artistic expression through painting, drawing, and
            crafting activities that enhance children&apos;s fine motor skills
            and creativity.
          </p>
        </li>

        {/* Music and Movement Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Music and Movement</strong>
          </h2>
          <p>
            Through singing, dancing, and playing instruments, children develop
            their rhythm and coordination while having fun.
          </p>
        </li>

        {/* Outdoor Play Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Outdoor Play</strong>
          </h2>
          <p>
            Daily outdoor playtime provides opportunities for running, jumping,
            climbing, and exploring nature.
          </p>
        </li>

        {/* Sensory Play Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Sensory Play</strong>
          </h2>
          <p>
            Sensory bins, water tables, and textured materials help children
            explore their senses and develop cognitive skills.
          </p>
        </li>

        {/* Storytime Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Storytime</strong>
          </h2>
          <p>
            We host daily storytime sessions to nurture a love for books and
            improve listening skills, vocabulary, and imagination.
          </p>
        </li>

        {/* Puzzle Time Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Puzzle Time</strong>
          </h2>
          <p>
            Puzzles help children develop problem-solving skills, focus, and
            cognitive abilities.
          </p>
        </li>

        {/* Building and Construction Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Building and Construction</strong>
          </h2>
          <p>
            Using blocks and construction materials, children learn about
            shapes, balance, and spatial relationships.
          </p>
        </li>

        {/* Pretend Play Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Pretend Play</strong>
          </h2>
          <p>
            Dress-up, role-playing, and make-believe games foster social skills,
            creativity, and emotional development.
          </p>
        </li>

        {/* Science Exploration Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Science Exploration</strong>
          </h2>
          <p>
            Children engage in simple science experiments, such as planting
            seeds and exploring the natural world.
          </p>
        </li>

        {/* Group Games Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Group Games</strong>
          </h2>
          <p>
            Cooperative games like Simon Says and parachute play encourage
            teamwork, listening, and following instructions.
          </p>
        </li>

        {/* Cooking Activities Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Cooking Activities</strong>
          </h2>
          <p>
            Simple cooking tasks teach children about healthy eating, measuring,
            and following directions.
          </p>
        </li>

        {/* Fine Motor Fun Section */}
        <li style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            <strong>Fine Motor Fun</strong>
          </h2>
          <p>
            Stringing beads, sorting objects, and other fine motor activities
            help strengthen hand-eye coordination and dexterity.
          </p>
        </li>
      </ul>
    </div>
  );
}
