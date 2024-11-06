import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import Colors from '../constants/colors';

// BOOKMARK COMPONENT (FILLS AND OUTLINES WHEN PRESSED)
function BookmarkButton(props) {
    if (props.pressed) {
        return (
            <Pressable onPress={props.OnPress}>
                <Ionicons name="bookmark" size={30} color={Colors.accent500} />
            </Pressable>
        );
    } else {
        return (
            <Pressable onPress={props.OnPress}>
                <Ionicons name="bookmark-outline" size={30} color={Colors.accent500} />
            </Pressable>
        );
    }
}
// EXPORTS THE BOOKMARK BUTTON COMPONENT
export default BookmarkButton;