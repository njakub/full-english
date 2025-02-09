// This utility function calculates the average rating of a form that contains multiple rating fields.
export const calculateAverageRating = (
  formValues: Record<string, any | undefined>
) => {
  if (!formValues) {
    return 0;
  }

  const ratings = Object.entries(formValues)
    .filter(
      ([key, value]) =>
        key.startsWith("itemRating-") && typeof value === "number"
    )
    .map(([key, value]) => value as number);

  if (ratings.length > 0) {
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const avg = sum / ratings.length;
    return Math.round(avg * 2) / 2; // Round to the nearest half
  }
};
