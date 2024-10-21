import Title from "antd/es/typography/Title";

export default function Activities() {
  return (
    <div>
      <Title level={2} style={{ textAlign: "center" }}>
        <strong>Our Activities</strong>
      </Title>
      <div className="section-content">
        <div style={{ flex: 1, margin: "16px 32px" }}>
          {/* Creative Arts Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Creative Arts</strong>
            </h2>
            <p>
              We encourage artistic expression through painting, drawing, and
              crafting activities that enhance children&apos;s fine motor skills
              and creativity.
            </p>
          </div>

          {/* Music and Movement Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Music and Movement</strong>
            </h2>
            <p>
              Through singing, dancing, and playing instruments, children
              develop their rhythm and coordination while having fun.
            </p>
          </div>

          {/* Outdoor Play Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Outdoor Play</strong>
            </h2>
            <p>
              Daily outdoor playtime provides opportunities for running,
              jumping, climbing, and exploring nature.
            </p>
          </div>

          {/* Sensory Play Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Sensory Play</strong>
            </h2>
            <p>
              Sensory bins, water tables, and textured materials help children
              explore their senses and develop cognitive skills.
            </p>
          </div>

          {/* Storytime Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Storytime</strong>
            </h2>
            <p>
              We host daily storytime sessions to nurture a love for books and
              improve listening skills, vocabulary, and imagination.
            </p>
          </div>

          {/* Puzzle Time Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Puzzle Time</strong>
            </h2>
            <p>
              Puzzles help children develop problem-solving skills, focus, and
              cognitive abilities.
            </p>
          </div>
        </div>
        <div style={{ flex: 1, margin: "16px 32px" }}>
          {/* Building and Construction Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Building and Construction</strong>
            </h2>
            <p>
              Using blocks and construction materials, children learn about
              shapes, balance, and spatial relationships.
            </p>
          </div>

          {/* Pretend Play Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Pretend Play</strong>
            </h2>
            <p>
              Dress-up, role-playing, and make-believe games foster social
              skills, creativity, and emotional development.
            </p>
          </div>

          {/* Science Exploration Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Science Exploration</strong>
            </h2>
            <p>
              Children engage in simple science experiments, such as planting
              seeds and exploring the natural world.
            </p>
          </div>

          {/* Group Games Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Group Games</strong>
            </h2>
            <p>
              Cooperative games like Simon Says and parachute play encourage
              teamwork, listening, and following instructions.
            </p>
          </div>

          {/* Cooking Activities Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Cooking Activities</strong>
            </h2>
            <p>
              Simple cooking tasks teach children about healthy eating,
              measuring, and following directions.
            </p>
          </div>

          {/* Fine Motor Fun Section */}
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              <strong>Fine Motor Fun</strong>
            </h2>
            <p>
              Stringing beads, sorting objects, and other fine motor activities
              help strengthen hand-eye coordination and dexterity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
