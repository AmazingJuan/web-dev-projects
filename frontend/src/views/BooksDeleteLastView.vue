<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { BookService } from '@/services/BookService';

const router = useRouter();

onMounted(() => {
  BookService.deleteLastBook();
  router.push('/books');
});
</script>
