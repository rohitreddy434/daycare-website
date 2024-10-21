import Title from "antd/es/typography/Title";
import "./Food.css";

export default function Food() {
  return (
    <div className="food-page-container">
      <Title level={2} style={{ textAlign: "center" }}>
        <strong>Meals and Snacks</strong>
      </Title>

      <p className="intro-text">
        At Tiny Miracles Daycare, we prioritize your child&apos;s well-being by
        providing healthy, balanced meals made from organic ingredients. Our
        goal is to establish healthy eating habits that will last a lifetime.
      </p>
      <p>
        Detailed Meal plan and ingredients used can be found{" "}
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1PWVdF3NAAd8KFnnjrWy_yvKPbSP58QAM3gUWSBXxFE0/edit?usp=sharing"
        >
          here.
        </a>
      </p>

      <div className="section-content">
        <div style={{ flex: 0.7, margin: "16px 32px" }}>
          <div className="section">
            <Title level={3}>Organic Ingredients</Title>
            <p>
              We source fresh, organic fruits, vegetables, whole grains, and
              lean proteins to prepare wholesome meals daily.
            </p>
          </div>

          <div className="section">
            <Title level={3}>No Sugary Drinks or Packaged Foods</Title>
            <p>
              We avoid serving sugary drinks, processed snacks, or packaged
              foods. Our focus is on natural, nutrient-dense options that fuel
              your child&apos;s energy and growth.
            </p>
          </div>

          <div className="section">
            <Title level={3}>Promoting Healthy Eating Habits</Title>
            <p>
              Mealtime is an opportunity to teach children about nutrition,
              encouraging them to try new foods and build a positive
              relationship with healthy eating.
            </p>
          </div>
        </div>
        <div
          style={{ flex: 0.3, margin: "16px 32px" }}
          className="menu-section"
        >
          <Title level={3}>Sample Menu</Title>
          <ul className="menu-list">
            <li>
              <strong>Breakfast:</strong> Organic oatmeal with fresh fruit
            </li>
            <li>
              <strong>Morning Snack:</strong> Veggie sticks with hummus or
              Fruits
            </li>
            <li>
              <strong>Lunch:</strong> Grilled chicken/Chickpeas/Kidney Beans/Egg
              with brown rice/White rice/Quinoa and steamed vegetables
            </li>
            <li>
              <strong>Afternoon Snack:</strong> Fresh fruit smoothie made with
              organic yogurt
            </li>
          </ul>
        </div>
      </div>

      <p className="closing-text">
        We work closely with families to accommodate any dietary restrictions
        and ensure that every child enjoys nutritious and delicious meals.
      </p>
    </div>
  );
}
