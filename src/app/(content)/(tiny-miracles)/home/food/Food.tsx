import Title from "antd/es/typography/Title";
import "./Food.css";

export default function Food() {
  return (
    <div className="food-page-container">
      <Title level={2} style={{ textAlign: "center", padding: 16 }}>
        <strong>Meals and Snacks</strong>
      </Title>
      <p className="intro-text">
        At Tiny Miracles Daycare, we prioritize your child's well-being by
        providing healthy, balanced meals made from organic ingredients. Our
        goal is to establish healthy eating habits that will last a lifetime.
      </p>

      <div className="section">
        <Title level={3}>Organic Ingredients</Title>
        <p>
          We source fresh, organic fruits, vegetables, whole grains, and lean
          proteins to prepare wholesome meals daily.
        </p>
      </div>

      <div className="section">
        <Title level={3}>No Sugary Drinks or Packaged Foods</Title>
        <p>
          We avoid serving sugary drinks, processed snacks, or packaged foods.
          Our focus is on natural, nutrient-dense options that fuel your child's
          energy and growth.
        </p>
      </div>

      <div className="section">
        <Title level={3}>Promoting Healthy Eating Habits</Title>
        <p>
          Mealtime is an opportunity to teach children about nutrition,
          encouraging them to try new foods and build a positive relationship
          with healthy eating.
        </p>
      </div>

      <div className="menu-section">
        <Title level={3}>Sample Menu</Title>
        <ul className="menu-list">
          <li>Breakfast: Organic oatmeal with fresh fruit</li>
          <li>Morning Snack: Veggie sticks with hummus or Fruits</li>
          <li>
            Lunch: Grilled chicken/Chickpeas/Kidney Beans/Egg with brown
            rice/White rice/Quinoa and steamed vegetables
          </li>
          <li>
            Afternoon Snack: Fresh fruit smoothie made with organic yogurt
          </li>
        </ul>
      </div>

      <p className="closing-text">
        We work closely with families to accommodate any dietary restrictions
        and ensure that every child enjoys nutritious and delicious meals.
      </p>
    </div>
  );
}
