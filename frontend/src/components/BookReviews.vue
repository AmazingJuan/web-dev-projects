<script setup lang="ts">
// Third party
import { computed, ref } from 'vue';

// Own
import type { CreateReviewDTO } from '@/dtos/CreateReviewDTO';
import { PresentationUtilities } from '@/utilities/PresentationUtilities';
import { ReviewService } from '@/services/ReviewService.js';

// props
const props = defineProps<{
  bookId: number;
}>();

// reactive
const reviews = computed(() => ReviewService.getReviewsByBookId(props.bookId));

const form = ref({
  rating: 5,
  comment: '',
  author: '',
});

const isSubmitting = ref(false);

// functions
function submitReview(): void {
  if (!form.value.comment.trim() || isSubmitting.value) {
    return;
  }

  isSubmitting.value = true;

  const newReview: CreateReviewDTO = {
    bookId: props.bookId,
    rating: Math.min(5, Math.max(1, form.value.rating)),
    comment: form.value.comment.trim(),
    author: form.value.author.trim() || undefined,
  };

  ReviewService.createReview(newReview);

  // Reset form
  form.value = { rating: 5, comment: '', author: '' };
  isSubmitting.value = false;
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-semibold text-gray-800">Reviews</h3>
    <!-- Create review form -->
    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <h4 class="text-sm font-medium text-gray-700 mb-3">Add a review</h4>
      <form @submit.prevent="submitReview" class="space-y-3">
        <div>
          <label for="rating" class="block text-sm text-gray-600 mb-1">Rating</label>
          <select
            id="rating"
            v-model.number="form.rating"
            class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option v-for="n in 5" :key="n" :value="n">{{ n }} star{{ n > 1 ? 's' : '' }}</option>
          </select>
        </div>
        <div>
          <label for="comment" class="block text-sm text-gray-600 mb-1">Comment</label>
          <textarea
            id="comment"
            v-model="form.comment"
            rows="3"
            class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Write your review..."
            required
          />
        </div>
        <div>
          <label for="author" class="block text-sm text-gray-600 mb-1">Your name (optional)</label>
          <input
            id="author"
            v-model="form.author"
            type="text"
            class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Name"
          />
        </div>
        <button
          type="submit"
          :disabled="isSubmitting || !form.comment.trim()"
          class="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Post review
        </button>
      </form>
    </div>

    <!-- Review list -->
    <ul v-if="reviews.length > 0" class="space-y-4">
      <li
        v-for="review in reviews"
        :key="review.id"
        class="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
      >
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="font-medium text-gray-800">{{ review.author || 'Anonymous' }}</span>

          <span class="text-amber-500 text-sm" :title="`${review.rating} stars`">
            {{ '★'.repeat(review.rating) }}{{ '☆'.repeat(5 - review.rating) }}
          </span>
        </div>
        <p class="text-gray-600 text-sm whitespace-pre-wrap">{{ review.comment }}</p>
        <p v-if="review.createdAt" class="text-gray-400 text-xs mt-2">
          {{ PresentationUtilities.formatDate(review.createdAt) }}
        </p>
      </li>
    </ul>
    <p v-else class="text-gray-500 text-sm py-4">No reviews yet. Be the first to review!</p>
  </div>
</template>
