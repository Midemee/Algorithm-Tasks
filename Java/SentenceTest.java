package filesandIo;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class SentenceTest {
    @Test
    public void testThatSentenceReturnsShortestWord(){
        String sentence = "Why is the world so wicked";
        String expected = "is";
        String actual = Sentence.getShortestWord(sentence);
        assertEquals(expected, actual);
    }

    @ParameterizedTest
    @CsvSource({
            "Can't wait to have fun in December, to",
            "Why is the world so wicked, is"
    }) void testSentenceReturnsShortestWord(String sentence, String word){
        assertEquals(word, Sentence.getShortestWord(sentence) );
    }

    @Test
    public void testToGetFirstShortestWordWhen_TwoWordsHasSameLength(){
        assertEquals("is", Sentence.getShortestWord("The world is so wicked"));
    }

    @Test
    public void testThatArrayOfNumbers_ReturnsSortedSquaredNumbers(){
        int [] numbers = {5, 3, 2, 1, 4};
        int [] expected = {1, 4, 9, 16, 25};
        int [] actual = Sentence.getSquareOfNumbers(numbers);
        assertArrayEquals(expected, actual);
    }
    @Test
    public void testThatArrayOfNumbers_ReturnsSortedSquaredNumbers_WithNegativeNumbers(){
        int [] numbers = {5, 3, -2, 1, 4};
        int [] expected = {1, 4, 9, 16, 25};
        int [] actual = Sentence.getSquareOfNumbers(numbers);
        assertArrayEquals(expected, actual);
    }
}