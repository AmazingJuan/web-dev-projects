// Own
import type { CreateReviewDTO } from '@/dtos/CreateReviewDTO';
import type { ReviewInterface } from '@/interfaces/ReviewInterface';
import { useReviewStore } from '@/stores/reviewstore.js';

export class ReviewService {
  // access operations
  static getReviews(): ReviewInterface[] {
    return useReviewStore().reviews;
  }

  static getReviewsByBookId(bookId: number): ReviewInterface[] {
    return useReviewStore().reviews.filter((review) => review.bookId === bookId);
  }

  // crud operations
  static createReview(review: CreateReviewDTO): void {
    const reviews = useReviewStore().reviews; //This id logic can be encapsulated in a util class (we could also need this for books)
    const nextId = reviews.length > 0 ? Math.max(...reviews.map((r) => r.id), 0) + 1 : 1;

    reviews.push({
      id: nextId,
      ...review,
      createdAt: new Date().toISOString(),
    });
  }

  static deleteReview(id: number): void {
    const store = useReviewStore();
    store.reviews = store.reviews.filter((review) => review.id != id);
  }

  static deleteReviewsByBookId(bookId: number): void {
    const bookReviews = this.getReviewsByBookId(bookId);
    for (const review of bookReviews) {
      this.deleteReview(review.id);
    }
  }
}
